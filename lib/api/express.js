const express = require('express');
const app = express();
const Web3 = require('web3');
const hbs = require('express-handlebars');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const Strategy = require('passport-google-oauth').OAuth2Strategy;
const ipn = require('paypal-ipn');
const config = require('../../config');
const helmet = require('helmet')
const expressSanitizer = require('express-sanitizer');
const fileUpload = require('express-fileupload');
const sjcl = require('sjcl');
const mongoose = require('mongoose');
const Campaign = require('../db/campaign.schema');
const Charity = require('../db/charity.schema');
const Token = require('../db/token.schema');
const Faucet = require('../db/faucet.schema');
const Pledge = require('../db/pledge.schema');
const Donation = require('../db/donation.schema');
const RateLimit = require('express-rate-limit');
const web3 = new Web3(new Web3.providers.HttpProvider('http://144.202.123.40:9546'));

let adminPass = '';
let certificateTracker = {};

class ExpressAPI {
  constructor() {
    app.use(helmet());
    app.engine('.hbs', hbs({defaultLayout: 'main', extname: '.hbs'}));
    app.set('view engine', '.hbs');
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(expressSanitizer());
    app.use(fileUpload(
      {
        limits: { fileSize: 1024 * 10e4 },
        abortOnLimit: true
      }
    ));
    app.use(session({
      secret: process.env.EXPSECRET,
      resave: true,
      saveUninitialized: true
    }));



    app.enable('trust proxy'); // only if you're behind a reverse proxy (Heroku, Bluemix, AWS if you use an ELB, custom Nginx setup, etc)

    var limiter = new RateLimit({
      windowMs: 60 * 1000, // 1 minutes
      max: 10000,
      delayMs: 0
    });

    app.use(limiter);

    this.config = config.siteData;
    if (process.env.NODE_ENV === "prd") {
      const bitArray = sjcl.hash.sha256.hash(process.env.ADMINPASS ? process.env.ADMINPASS : Math.random() * 10e18);
      const digest_sha256 = sjcl.codec.hex.fromBits(bitArray);
      adminPass = digest_sha256;
    }


    this.initPassport();
    this.initRoutes();
  }

  start() {
    mongoose.connect('mongodb://localhost/test');

    app.listen(4000, () => {
      console.log('listening on 4k');
    });
  }

/*
var data = {
      from: 'NoReply<noreply@acubedheritage.com>',
      to: 'alex.sherbuck@airbus-sv.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomeness!'
    };
*/

  sendEmail(data) {
    const api_key = process.env.MAILGUN_KEY;
    const domain = 'mail.acubedheritage.com';
    const mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });

    mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });
  }

  makeCertificate(data, cb) {

    const Jimp = require('jimp')

    // 65px per character
    // 1540 is center of image

    let centerX = 1500;
    let y = 1150;
    let offset = 65;
    let nameX = centerX - (data.name.length / 2 * offset);
    let donationX = 400;
    let donationY = 1800;
    let donationSubTitleX = donationX + (data.donationString.length / 2 * offset) - (data.donationSubTitle.length / 2 * offset / 4);
    let charityX = 2100;

    Jimp.read("public/images/HeritageCertificate.png").then(function (image) {
      // do stuff with the image
      Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then(function (font) {
        image.print(font, nameX, y, data.name);
        image.print(font, donationX, donationY, data.donationString);

        Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) {

          image.print(font, charityX, donationY - 150, data.charityName);
          image.print(font, charityX, donationY, data.donationSubTitle);
          image.print(font, charityX, donationY + 150, data.charityEIN);
          image.write(`public/images/certificates/${data.fileName}.png`)

          setTimeout(function() {
            return cb(null);
          }, 1000);

        }).catch(function (err) {
          // handle an exception
          //console.log(err)
          return cb(err);
        });
      });
    }).catch(function (err) {
      // handle an exception
      //console.log(err);
      return cb(err);
    });
  }

  authenticate(req, res, next) {

    if (process.env.NODE_ENV === "dev") {
      let devUser ={
        isAdmin: true,
        displayName: 'dev user',
        emails: [{value: 'dev@gmail.com'}]
      }
      req.user = devUser;
      return next();
    }

    if (!req.user ||
      !req.user._json) {
        return res.redirect('/');
      } else {
        return next();
      }
  }

  adminAuthenticate(req, res, next) {

    if (process.env.NODE_ENV === "dev") {
      return next();
    } else {
      if (req.user.isAdmin) {
        return next();
      } else {
        const data = req.body.data;
        if (data === adminPass) {
          req.user.isAdmin = true;
          return next();
        } else {
          res.redirect('/admin/login');
        }
      }
    }
  }

  sanitize(req, res, next) {
    for (let prop in req.body) {
      req.body[prop] = req.sanitize(req.body[prop]);
    }
    next();
  }

  initPassport() {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.use(new Strategy({
      name: 'google',
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: `/auth/google/callback`
    },
      (accessToken, refreshToken, profile, done) => {


        return done(null, profile);
      }
    ));

    passport.serializeUser(function(user, done) {
      done(null, user);
    });

    passport.deserializeUser(function(user, done) {
      done(null, user);
    });
  }

  initRoutes() {
    app.use("/public", express.static('./public'));

    app.get('/auth/google',

    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

    app.post('/certificate', this.authenticate, (req, res) => {
      let data = req.body

      this.makeCertificate(data, (err) => {
        if (!err) {
          return res.send(`public/images/certificates/${data.fileName}.png`);
        } else {
          return res.status(404).send();
        }
      });
    })

    app.post('/paypal/ipn', this.sanitize, (req, res) => {
      // Reply or paypal will send again
      res.status(200).send();
      let data = req.body;

      let campaignId = data.item_name;
      let pledgeId = data.item_number;
      let amount = data.mc_gross;
      let currency = data.mc_currency;
      let receiver = data.receiver_email;

      if (certificateTracker[`${campaignId}${pledgeId}`]) {
        // Catch extra requests during dev time
        return;
      }

      const makeCertificate = this.makeCertificate;
      const sendEmail = this.sendEmail;

      ipn.verify(data, async function cb(err, msg) {
        if (err) {
          // Send notification email
          console.log(err);
          return;
        } else {
          let campaign;
          let pledge;
          let charity;

          try {
            campaign = await Campaign.findById(campaignId);
            pledge = await Pledge.findById(pledgeId);
            charity = await Charity.findOne({ identifier: pledge.charityId});
            await Donation.saveDonation({
              campaignId,
              pledgeId,
              email: pledge.email,
              amount
            })
          } catch (e) {
            console.log(e);
          }

            // Send Certificate Email
            let certificateData = {
              name: pledge.displayName.toUpperCase(),
              fileName: `${campaignId}${pledgeId}`,
              donationString: `${amount} ${currency}`,
              donationSubTitle: campaign.name,
              charityName: pledge.charityName,
              charityEIN: charity.taxid
            }
            makeCertificate(certificateData, (err) => {
              if (!err) {

                //Send Email
                const emailData = {
                  from: 'NoReply<noreply@acubedheritage.com>',
                  to: pledge.email,
                  subject: `Heritage Donation Certificate Ready!`,
                  html: `<a href="https://acubedheritage.com/public/images/certificates/${certificateData.fileName}.png">Download it here</a>`
                };

                sendEmail(emailData)
                certificateTracker[`${campaignId}${pledgeId}`] = true;
              }
            });

        }
      })
    })

    app.get('/sorry', (req, res) => {
      res.render('sorry', {
        layout: 'demo'
      })
    })

    app.get('/faucet/:addr', this.authenticate, this.sanitize, async (req, res) => {
      const addr = req.params.addr;
      const amount = this.config.faucetAmt;
      const emailAddr = req.user.emails[0].value;
      let count;

      try {
        count = await Faucet.find({ email: emailAddr }).count();
      } catch (e) {
        //console.log(e);
      }

      if (count > 0) {
        return res.send(false)
      }

      web3.personal.unlockAccount(web3.eth.accounts[0], 'asdf1234', 1);
      web3.eth.sendTransaction({
        to: addr, from: web3.eth.accounts[0], value: amount
      });

      try {
        await Faucet.saveFaucet({
          email: emailAddr,
          address: addr
        })
      } catch (e) {
        //console.log(e);
      }
      res.send({addr, amount});
    });

    app.get('/faucet-pending', this.authenticate, (req, res) => {
      res.render('faucet-pending', {
        layout: 'demo'
      })
    });

    app.get('/auth/google/callback',
      passport.authenticate('google', { failureRedirect: '/fail' }),
      (req, res) => {
        res.redirect('/demo');
      });

    app.get('/admin', this.authenticate, this.adminAuthenticate, (req, res) => {
      res.render('dashboard', {
        layout: 'admin',
        dashboard: true,
        config: this.config
      })
    });

    app.get('/admin/login', this.authenticate, (req, res) => {
      res.render('admin-login', {
        layout: 'admin-login',
      });
    });


    app.post('/admin/login', this.authenticate, this.adminAuthenticate, this.sanitize, (req, res) => {
      res.send(req.user.isAdmin);
    });

    app.get('/admin/charities/create', this.authenticate, this.adminAuthenticate, (req, res) => {
      res.render('charities-create', {
        layout: 'admin',
        config: this.config,
        charitiesCreate: true
      })
    });

    app.get('/admin/charities/edit/:id', this.authenticate, this.adminAuthenticate, async (req, res) => {
      if (!req.params || !req.params.id) {
        return res.status(400).send();
      }

      let charity;
      let id = req.params.id || 0;
      try {
        charity = await Charity.findOne({ _id: id });
      } catch (e) {
        //console.log(e)
        return res.status(404).send();
      }

      res.render('charities-edit', {
        layout: 'admin',
        config: this.config,
        charity
      })
    });

    app.get('/admin/charities/manage', this.authenticate, this.adminAuthenticate, async (req, res) => {
      let charities = [];
      let totalCharities = 0;
      let pageSize = req.query.pageSize || 10;
      let page = parseInt(req.query.page, 10) || 1;

      const skip = (page - 1) * pageSize;

      try {
        charities = await Charity.find()
          .sort({ _id: -1 })
          .skip(skip)
          .limit(pageSize);
        totalCharities = await Charity.count();
      } catch (e) {
        //console.log(e);
      }

      const nextPageNumber = ((page) * pageSize) < totalCharities ? page + 1 : page;
      const prevPageNumber = page === 1 ? page : page - 1;

      res.render('charities-manage', {
        layout: 'admin',
        config: this.config,
        nextPageNumber,
        prevPageNumber,
        charities,
        totalCharities
      })
    });

    app.get('/admin/campaigns/ETH/create', this.authenticate, this.adminAuthenticate, (req, res) => {

      res.render('campaign-eth-create', {
        layout: 'admin',
        config: this.config,
        campaignCreateEth: true
      })
    });

    app.get('/admin/campaigns/ETH/manage', this.authenticate, this.adminAuthenticate, async (req, res) => {
      let campaignType;
      let campaigns = [];
      let totalCampaigns = 0;
      let pageSize = req.query.pageSize || 10;
      let page = parseInt(req.query.page, 10) || 1;

      const skip = (page - 1) * pageSize;

      campaignType = 'USD';

      try {
        campaigns = await Campaign.find()
          .sort({ _id: -1 })
          .skip(skip)
          .limit(pageSize);
        totalCampaigns = await Campaign.count();
      } catch (e) {
        //console.log(e);
      }

      const nextPageNumber = ((page) * pageSize) < totalCampaigns ? page + 1 : page;
      const prevPageNumber = page === 1 ? page : page - 1;

      res.render('campaign-eth-manage', {
        layout: 'admin',
        config: this.config,
        type: campaignType,
        isUSD: true,
        campaignManageEth: true,
        prevPageNumber,
        nextPageNumber,
        campaigns,
        totalCampaigns
      })
    });

    app.get('/admin/campaigns/ETH/view', this.authenticate, this.adminAuthenticate, async (req, res) => {

      res.render('campaign-eth-view', {
        layout: 'admin',
        config: this.config,
      })
    });

    app.get('/admin/campaigns/USD/create', this.authenticate, this.adminAuthenticate, (req, res) => {

      res.render('campaign-create', {
        layout: 'admin',
        config: this.config,
        type: "USD",
        isUSD: true,
        usdCreate: true
      })
    });

    app.get('/admin/campaigns/USD/manage', this.authenticate, this.adminAuthenticate, async (req, res) => {
      let campaignType;
      let campaigns = [];
      let totalCampaigns = 0;
      let pageSize = req.query.pageSize || 10;
      let page = parseInt(req.query.page, 10) || 1;

      const skip = (page-1) * pageSize;

      campaignType = 'USD';

      try {
        campaigns = await Campaign.find()
          .sort({ _id: -1 })
          .skip(skip)
          .limit(pageSize);
        totalCampaigns = await Campaign.count();
      } catch (e) {
        //console.log(e);
      }

      const nextPageNumber = ((page) * pageSize) < totalCampaigns ? page + 1 : page;
      const prevPageNumber = page === 1 ? page : page - 1;

      res.render('campaign-manage', {
        layout: 'admin',
        config: this.config,
        type: campaignType,
        isUSD: true,
        usdManage: true,
        prevPageNumber,
        nextPageNumber,
        campaigns,
        totalCampaigns
      })
    });

    app.get('/admin/campaigns/USD/view', this.authenticate, this.adminAuthenticate, async (req, res) => {
      let campaigns = [];
      let totalCampaigns = 0;
      let pageSize = req.query.pageSize || 10;
      let page = parseInt(req.query.page, 10) || 1;

      const skip = (page - 1) * pageSize;

      try {
        campaigns = await Campaign.find()
                                  .sort({ _id: -1})
                                  .skip(skip)
                                  .limit(pageSize);
        totalCampaigns = await Campaign.count();
      } catch(e) {
        //console.log(e);
      }

      const nextPageNumber = ((page) * pageSize) < totalCampaigns ? page + 1 : page;
      const prevPageNumber = page === 1 ? page : page - 1;

      res.render('campaign-view', {
        layout: 'admin',
        config: this.config,
        type: "USD",
        nextPageNumber,
        prevPageNumber,
        campaigns,
        totalCampaigns
      })
    });

    app.get('/admin/campaigns/USD/manage/:id', this.authenticate, this.adminAuthenticate, async (req, res) => {
      if (!req.params.id) {
        res.status(404).send();
      }

      const campaignId = req.params.id;

      let campaign;
      try {
        campaign = await Campaign.find({_id: campaignId});
      } catch(e) {
        //console.log(e);
      }

      campaign.id = campaignId;

      res.render('campaign-edit', {
        layout: 'admin',
        config: this.config,
        campaignId: campaignId,
        campaign
      })
    });

    app.get('/token/:campaignId/:tokenId', this.authenticate, async (req, res) => {
      let token;

      try {
        token = await Token.find({
          campaignId: req.params.campaignId,
          tokenId: req.params.tokenId
        })
      } catch (e) {
        //console.log(e);
        return res.status(404).send();
      }

      res.send(token);
    })

    app.post('/admin/campaigns/USD/create', this.authenticate, this.adminAuthenticate, this.sanitize, async (req, res) => {
      if (!req.body ||
        !req.body.campaignName ||
        !req.body.employeeName ||
        !req.body.campaignDescription ||
        !req.body.campaignGoal) {
        return res.status(400).send();
      }

      await Campaign.saveCampaign({
        name: req.body.campaignName,
        employee: req.body.employeeName,
        image: req.body.image1,
        youtube: req.body.youtube,
        description: req.body.campaignDescription,
        measure: req.body.measure,
        goal: req.body.campaignGoal,
        cryptoId: req.body.cryptoId,
        startDate: null,
        active: false,
        creator: req.user ? req.user.displayName : "Not logged in"
      })
      return res.status(200).send();
    });

    app.post('/admin/campaigns/USD/edit', this.authenticate, this.adminAuthenticate, this.sanitize, async (req, res) => {
      if (!req.body ||
        !req.body.campaignId ||
        !req.body.campaignName ||
        !req.body.employeeName ||
        !req.body.campaignDescription ||
        !req.body.campaignGoal) {
        return res.status(400).send();
      }

      await Campaign.updateCampaign({
        campaignId: req.body.campaignId,
        name: req.body.campaignName,
        employee: req.body.employeeName,
        image: req.body.image1,
        youtube: req.body.youtube,
        description: req.body.campaignDescription,
        measure: req.body.measure,
        goal: req.body.campaignGoal,
        cryptoId: req.body.cryptoId,
        startDate: null,
        active: false,
        creator: req.user ? req.user.displayName : "Not logged in"
      })
      return res.status(200).send();
    });

    app.post('/admin/charities/create', this.authenticate, this.adminAuthenticate, this.sanitize, async (req, res) => {
      if (!req.body ||
        !req.body.charityName) {
        return res.status(400).send('');
      }

      await Charity.saveCharity({
        name: req.body.charityName,
        identifier: req.body.identifier,
        paypal: req.body.paypal,
        shortDescription: req.body.shortDescription,
        cryptoCampaignId: req.body.cryptoCampaignId,
        text1: req.body.text1,
        text2: req.body.text2,
        text3: req.body.text3,
        text4: req.body.text4,
        taxid: req.body.taxid,
        creator: req.user ? req.user.displayName : "Not logged in"
      })
      return res.status(200).send();
    });

    app.post('/admin/token', this.authenticate, this.adminAuthenticate, this.sanitize, async (req, res) => {
      if (!req.body ||
        !req.body.campaignId ||
        !req.body.tokenId ||
        !req.body.tokenDescription) {
        return res.status(400).send('');
      }
      let token;

      try {
        token = await Token.updateToken({
          campaignId: req.body.campaignId,
          tokenId: req.body.tokenId,
          image: req.body.image1,
          shortDescription: req.body.tokenDescription,
          link: req.body.tokenLink
        })
      } catch (e) {
        //console.log(e);
        return res.status(404).send();
      }

      return res.status(200).send(token);
    });


    app.post('/admin/charities/edit', this.authenticate, this.adminAuthenticate, this.sanitize, async (req, res) => {
      if (!req.body ||
        !req.body.id ||
        !req.body.charityName) {
        return res.status(400).send('');
      }
      let charity;

      try {
        charity = await Charity.updateCharity({
          id: req.body.id,
          name: req.body.charityName,
          identifier: req.body.identifier || "",
          paypal: req.body.paypal || "",
          cryptoCampaignId: req.body.cryptoCampaignId || "",
          shortDescription: req.body.shortDescription || "",
          text1: req.body.text1 || "",
          text2: req.body.text2 || "",
          text3: req.body.text3 || "",
          text4: req.body.text4 || "",
          taxid: req.body.taxid,
          creator: req.user ? req.user.displayName : "Not logged in"
        })
      } catch (e) {
        //console.log(e);
        return res.status(404).send();
      }

      return res.status(200).send(charity);
    });

    app.post('/admin/charities/delete/:id', this.authenticate, this.adminAuthenticate, this.sanitize, async (req, res) => {
      if (!req.params ||
        !req.params.id) {
        return res.status(400).send('');
      }

      try {
        await Charity.deleteCharity({
          id: req.params.id
        })
      } catch(e) {
        //console.log(e);
        return res.status(404).send();
      }

      return res.status(200).send();
    });


    app.post('/admin/campaigns/create/upload', this.authenticate, this.adminAuthenticate, this.sanitize, function (req, res) {
      const mimeType = {
        'image/png': true,
        'image/jpeg': true,
        'image/gif': true
      }

      if (!req.files)
        return res.status(400).send('No files were uploaded.');

      let fileType = req.files.file.mimetype;

      if (!mimeType[fileType]) {
        return res.status(400).send('File is not an image.');
      }

      // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
      let imageFile = req.files.file;
      const fileHash = imageFile.md5;
      // Use the mv() method to place the file somewhere on your server
      imageFile.mv('./public/uploads/' + fileHash + '.jpg', function (err) {
        if (err)
          return res.status(500).send(err);

        res.send(fileHash);
      });
    });

    app.post('/admin/campaigns/USD/activate/:id', this.authenticate, this.adminAuthenticate, this.sanitize, (req, res) => {
      if (!req.params || ! req.params.id) {
        return res.status(400).send();
      }

      const id = req.params.id;

      Campaign.findById(id, function (err, campaign) {
        if (err) {
          return res.status(501).send();
        }

        if (campaign.complete ||
            campaign.cancelled) {
              return res.status(400).send();
            }

        campaign.active = true;
        campaign.startDate = Date.now();

        campaign.save(function (err, updatedCampaign) {
          if (err) {
            return res.status(501).send();
          }
          return res.send(updatedCampaign);
        });
      });
    })
    app.post('/admin/campaigns/USD/cancel/:id', this.authenticate, this.adminAuthenticate, this.sanitize, (req, res) => {
      if (!req.params || ! req.params.id) {
        return res.status(400).send();
      }

      const id = req.params.id;

      Campaign.findById(id, function (err, campaign) {
        if (err) {
          return res.status(501).send();
        }

        if (campaign.complete ||
            campaign.cancelled) {
              return res.status(400).send();
            }

        campaign.active = false;
        campaign.cancelled = true;

        campaign.save(function (err, updatedCampaign) {
          if (err) {
            return res.status(501).send();
          }
          return res.send(updatedCampaign);
        });
      });
    })

    app.post('/admin/campaigns/USD/sendDonationNotification/:id', this.authenticate, this.adminAuthenticate, this.sanitize, async (req, res) => {
      if (!req.params || !req.params.id || !req.body.completed) {
        return res.status(400).send();
      }

      const id = req.params.id;
      let campaign;
      let pledge;
      let completeCount = req.body.completed || 0;
      try {
        pledge = await Pledge.find({ campaignId: id }).sort({ _id: -1 });
        campaign = await Campaign.findById(id)
        campaign.completeCount = completeCount;
        await campaign.save();
      } catch (e) {
        //console.log(e);
        return res.status(501).send();
      }


      pledge.forEach(pledge => {
        let totalDonation = pledge.amount * completeCount;

        let pledgeMsg = `${pledge.displayName} Your $${totalDonation} donation to ${pledge.charityName} for ${campaign.name} is ready:

        <a href="https://acubedheritage.com/donation/${campaign._id}/${pledge._id}">https://acubedheritage.com/donation/${campaign._id}/${pledge._id}</a>.
        `

        const emailData = {
          from: 'NoReply<noreply@acubedheritage.com>',
          to: pledge.email,
          subject: `Heritage Donation to ${pledge.charityName} Ready!`,
          html: pledgeMsg
        };

        this.sendEmail(emailData)
      })
      res.send();
    })


    app.post('/admin/campaigns/USD/complete/:id', this.authenticate, this.adminAuthenticate, this.sanitize, async (req, res) => {
      const id = req.params.id;
      let campaign;

      try {
        campaign = await Campaign.findById(id)
      } catch(e) {
        //console.log(e);
        return res.status(501).send();
      }

      if (campaign.complete ||
        campaign.cancelled ||
        !campaign.active) {
        return res.status(400).send();
      }

      campaign.active = false;
      campaign.complete = true;
      campaign.save(function (err, updatedCampaign) {
        if (err) {
          console.log(err)
          return res.status(501).send();
        }

        return res.send(updatedCampaign);
      });
    })

    app.get('/donation/:campaignId/:pledgeId', async (req, res) => {

      if (!req.params.campaignId ||
          !req.params.pledgeId) {
            res.status(404).send();
          }
      let campaignId = req.params.campaignId;
      let pledgeId = req.params.pledgeId;

      let campaign;
      let pledge;
      let charity;

      try {
        campaign = await Campaign.findById(campaignId);
        pledge = await Pledge.findById(pledgeId);
        charity = await Charity.find({ identifier: pledge.charityId });

      } catch (e) {
        console.log(e);
      }

      if (charity.length > 0) {
        charity = charity[0];
      }

      res.render('donation-page', {
        layout: 'demo',
        header: {},
        config: this.config,
        campaign,
        pledge,
        charity,
        donationAmount: pledge.amount * campaign.completeCount
      })
    })

    app.post("/pledge", this.authenticate, this.sanitize, async (req, res) => {
      if (!req.user ||
          !req.body.campaignId ||
          !req.body.charityId ||
          !req.body.pledgeAmount ||
          req.body.pledgeAmount < 1) {
        return res.status(404).send();
      }

      const data = {
        campaignId: req.body.campaignId,
        charityId: req.body.charityId,
        charityName: req.body.charityName,
        email: req.user.emails[0].value,
        msg: req.body.pledgeMsg,
        displayName: req.user.displayName,
        amount: req.body.pledgeAmount
      }

      let pledge;

      try {
        pledge = await Pledge.updatePledge(data);
      } catch (e) {
        //console.log(e);
        return res.status(404).send();
      }

      res.send(true);
    });

    app.get("/pending", this.authenticate, (req, res) => {
      res.render('pending', {
        layout: 'demo'
      });
    });

    app.get('/', (req, res) => {
      res.render('login');
    });

    app.get('/guide', this.authenticate, (req, res) => {
      res.render('guide', {
        layout: 'demo',
        header: {
          guide: true
        },
        config: this.config
      })
    });

    app.get('/about', this.authenticate, (req, res) => {
      res.render('about', {
        layout: 'demo',
        header: {
          about: true
        },
        config: this.config
      })
    });

    app.get('/charities', this.authenticate, async (req, res) => {
      let charities = [];
      try {
        charities = await Charity.find().sort({ _id: -1 });
      } catch (e) {
        //console.log(e);
      }

      res.render('charities', {
        layout: 'demo',
        header: {
          charity: true
        },
        config: this.config,
        charities
      })
    });
    app.get('/charities/:id', this.authenticate, async (req, res) => {
      if (!req.params ||
          !req.params.id) {
            return res.status(404).send();
          }
      let charity;
      let tokens = [];
      let id = req.params.id || 0;
      try {
        charity = await Charity.findOne({ _id: id });

        if (charity.cryptoCampaignId) {
          tokens = await Token.find({
            campaignId: charity.cryptoCampaignId
          });
        }

      } catch (e) {
        //console.log(e)
        res.status(404).send();
      }

      charity.text1 = charity.text1 ? `<p>${charity.text1.replace(/\n/g, '</p><p>')}</p>` : "";
      charity.text2 = charity.text2 ? `<p>${charity.text2.replace(/\n/g, '</p><p>')}</p>` : "";
      charity.text3 = charity.text3 ? `<p>${charity.text3.replace(/\n/g, '</p><p>')}</p>` : "";
      charity.text4 = charity.text4 ? `<p>${charity.text4.replace(/\n/g, '</p><p>')}</p>` : "";

      res.render('charities-landing', {
        layout: 'demo',
        header: {
          charity: true
        },
        config: this.config,
        hasTokens: tokens.length > 0 ? true : false,
        charity,
        tokens

      })
    });

    app.get('/campaigns/:id', this.authenticate, async (req, res) => {
      let campaign;
      let charities;
      let pledges;
      let donations;
      let id = req.params.id || 0;
      try {
        campaign = await Campaign.findOne({ _id: id });
        charities = await Charity.find().sort({ _id: -1 });
        pledges = await Pledge.find({campaignId: id}).sort({ _id: -1 });
        donations = await Donation.find({campaignId: id})
      } catch (e) {
        //console.log(e)
        res.status(404).send();
      }

      if (campaign.cancelled) {
        return res.status(404).send();
      }

      campaign.description = `<p>${campaign.description.replace(/\n/g, '</p><p>')}</p>`;
      campaign.raised = !campaign.raised ? 0 : campaign.raised;
      campaign.donations = !campaign.donations ? 0 : campaign.donations;

      res.render('campaign', {
        layout: 'demo',
        header: {
          campaigns: true
        },
        config: this.config,
        campaign,
        measureSingular: campaign.measure ? campaign.measure.toLowerCase().slice(-1) === 's' ? campaign.measure.slice(0, -1) : campaign.measure : '',
        charities,
        pledges: pledges.slice(0, 10),
        totalPledges: pledges.reduce((a,b) => {
          return a+1;
        },0),
        totalPledged: pledges.reduce((a,b) => {
          return {amount: a.amount + b.amount};
        }, {amount: 0}).amount,
        totalRaised: donations.reduce((a, b) => {
          return a + b.amount;
        }, 0),
        progress: pledges.reduce((a, b) => {
          return {amount: a.amount + b.amount};
        }, {amount: 0}).amount / campaign.goal * 100
      })
    });

    app.get('/campaigns', this.authenticate, async (req, res) => {
      let campaigns = [];
      try {
        campaigns = await Campaign.find({ active: true }).sort({ _id: -1 });
      } catch (e) {
        //console.log(e);
      }

      res.render('campaigns', {
        layout: 'demo',
        header: {
          campaigns: true
        },
        config: this.config,
        campaigns
      })
    });

    app.get('/complete', this.authenticate, async (req, res) => {
      let campaigns = [];
      try {
        campaigns = await Campaign.find({ complete: true }).sort({ _id: -1 });
      } catch (e) {
        //console.log(e);
      }

      res.render('campaigns', {
        layout: 'demo',
        header: {
          campaigns: true
        },
        config: this.config,
        campaigns
      })
    });

    app.get('/contact', this.authenticate, (req, res) => {
      res.render('contact', {
        layout: 'demo',
        header: {
          contact: true
        },
        config: this.config
      })
    });

    app.get('/currency-info', this.authenticate, (req, res) => {
      res.render('currency-info', {
        layout: 'demo',
        header: {
          home: true
        },
        config: this.config
      })
    });




    app.get('/admin/reports/manager', this.authenticate, (req, res) => {
      res.render('blank', {
        layout: 'admin',
        header: {
          home: true
        },
        config: this.config
      })
    });

    app.get('/admin/reports/campaign', this.authenticate, (req, res) => {
      res.render('blank', {
        layout: 'admin',
        header: {
          home: true
        },
        config: this.config
      })
    });

    app.get('/admin/reports/platform', this.authenticate, (req, res) => {
      res.render('blank', {
        layout: 'admin',
        header: {
          home: true
        },
        config: this.config
      })
    });

    app.get('/admin/settings/general', this.authenticate, (req, res) => {
      res.render('blank', {
        layout: 'admin',
        header: {
          home: true
        },
        config: this.config
      })
    });

    app.get('/admin/settings/managers', this.authenticate, (req, res) => {
      res.render('managers', {
        layout: 'admin',
        config: this.config,
        managers: true
      })
    });

    app.get('/admin/settings/configuration', this.authenticate, (req, res) => {
      res.render('blank', {
        layout: 'admin',
        header: {
          home: true
        },
        config: this.config
      })
    });

    app.get('/admin/settings/security', this.authenticate, (req, res) => {
      res.render('blank', {
        layout: 'admin',
        header: {
          home: true
        },
        config: this.config
      })
    });

    app.use("/demo", this.authenticate, async (req, res) => {
      let campaigns = [];
      let charities = [];

      try {
        campaigns = await Campaign.find({ active: true }).sort({ _id: -1 }).limit(3);
        charities = await Charity.find().sort({ _id: -1 });
      } catch (e) {
        //console.log(e);
      }

      res.render('landing', {
        layout: 'demo',
        header: {
          home: true
        },
        config: this.config,
        campaigns,
        charities
      })
    });

    app.use("/mydonations", this.authenticate, (req, res) => {
      res.render('mydonations', {
        layout: 'demo',
        header: {
          donations: true
        },
        config: this.config
      })
    });

    app.use("/statistics", this.authenticate, (req, res) => {
      res.render('statistics', {
        layout: 'demo',
        header: {
          donations: true
        },
        config: this.config
      })
    });

    app.get("*", (req, res) => {
      res.status(404).send();
    })

  }
}

module.exports = ExpressAPI