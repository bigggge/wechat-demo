/**
 * wxCommon.js
 *
 * Created by xiepan on 2016/11/29 上午11:57.
 */

var config = require('../../config'),
    WechatAPI = require('wechat-api'),
    OAuth = require('wechat-oauth');

exports.client = new OAuth(config.appid, config.secret)
exports.wechatAPI = new WechatAPI(config.appid, config.secret)