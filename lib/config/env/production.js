'use strict';

module.exports = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://btroncone:cis411@troup.mongohq.com:10011/cis411'
  }
};