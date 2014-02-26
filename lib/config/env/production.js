'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://btroncone:cis411@ds033059.mongolab.com:33059/cis411'
  }
};