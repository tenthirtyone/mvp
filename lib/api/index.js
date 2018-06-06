const express = require('./express');

class API {
  constructor() {    
    this.engines = {
      express
    }
  }
}

module.exports = API;