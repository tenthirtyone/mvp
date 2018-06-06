const Jimp = require('jimp')

// 65px per character
// 1540 is center of image

let centerX = 1500;
let y = 1150;
let offset = 65;
let nameX = centerX - (name.length / 2 * offset);
let donationX = 400;
let donationY = 1800;
let donationSubTitleX = donationX + (donationString.length / 2 * offset) - (donationSubTitle.length / 2 * offset / 4);
let charityX = 2100;

let name = "ALEX SHERBUCK";
let donationString = '25 ETH';
let donationSubTitle = 'Beat Naresh with a Plank';
let charityName = 'Airline Ambassadors';
let charityEIN = '23-12345678';

Jimp.read("./HeritageCertificate.png").then(function (image) {
  // do stuff with the image
  Jimp.loadFont(Jimp.FONT_SANS_128_BLACK).then(function (font) {
    image.print(font, nameX, y, name);
    image.print(font, donationX, donationY, donationString);

    Jimp.loadFont(Jimp.FONT_SANS_64_BLACK).then(function (font) {

      image.print(font, charityX, donationY - 150, charityName);
      image.print(font, charityX, donationY, donationSubTitle);
      image.print(font, charityX, donationY + 150, charityEIN);
      image.write('../../public/images/certificates/test.png')
    }).catch(function (err) {
      // handle an exception
      console.log(err)
    });
  });
}).catch(function (err) {
  // handle an exception
  console.log(err)
});

