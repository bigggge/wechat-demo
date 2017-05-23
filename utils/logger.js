var env = process.env.NODE_ENV || "development";
var path = require('path');
var directory = path.join(__dirname, '../logs/');


var log4js = require('log4js');
log4js.configure({
    appenders: [
        {
            type: 'console',
            layout: {
                type: 'pattern',
                pattern: '[%r] [%[%5.5p%]] \n %m%n'
            }
        },
        {
            type: 'dateFile',
            filename: directory + 'LOGGER',
            pattern: "-yyyy-MM-dd.log",
            alwaysIncludePattern: true,
            category: 'cheese',
        }]
});

var logger = log4js.getLogger('cheese');
logger.setLevel(env !== 'production' ? 'ALL' : 'ERROR');

module.exports = logger;