var _ = require('underscore');

var base = {
  port: 3000,
  maxSockets: 100,
  dbConnectionInfo: {
    multipleStatements: true,
    connectionLimit: 50
  },
  redisConnectionInfo: {
    port: 6379,
    db: 0,
    pass: 'Wewillrockyou1986!',
    logErrors: false
  },
  intercom: {
    appApiKey: "04f1d02b2516abefc75976e25118609ca21bf8de",
    appId: "wgf4en1r",
    admin: "411412" //this is lifen's admin id
  }
};

var init = function(env) {
  switch (env) {
    case 'dev':
      return _.extend({
        loglevel: 'all',
        dbConnectionInfo: _.extend({
          host: 'landerds-app.cynwtdt18kyi.us-west-2.rds.amazonaws.com',
          user: 'buildcave',
          password: 'Wewillrockyou1986!',
          database: 'ripbin_test_db'
        }, base.dbConnectionInfo),
        redisConnectionInfo: _.extend({
          host: '52.39.113.167'
        }, base.redisConnectionInfo)
      }, base)
      break;
    case 'prod':
      return _.extend({
        loglevel: 'error',
        dbConnectionInfo: _.extend({
          host: 'landerds-app.cynwtdt18kyi.us-west-2.rds.amazonaws.com',
          user: 'buildcave',
          password: 'Wewillrockyou1986!',
          database: 'ribin_prod_db'
        }, base.dbConnectionInfo),
        redisConnectionInfo: _.extend({
          host: '10.35.0.166'
        }, base.redisConnectionInfo)
      }, base)
      break;
    default:
      break;
  }
}

module.exports = init;
