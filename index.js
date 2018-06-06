const Statics = require('./lib/statics');
const statics = new Statics();

const APIFactory = require('./lib/api');
const API = new APIFactory();
const express = new API.engines.express();

statics.compile();
express.start();
