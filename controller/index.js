/**
 * index.js
 *
 * https://github.com/node-webot/wechat       微信公共平台自动回复消息接口服务中间件
 * https://github.com/node-webot/wechat-api   微信公共平台API
 * https://github.com/node-webot/wechat-oauth 微信公共平台OAuth接口消息接口服务中间件与API SDK
 *
 * Created by ice on 2017/5/23 下午2:44.
 */

var wechat = require('wechat');
var config = require('../config');
var wxJSSDK = require('../utils/wx/wxJSSDK');
var logger = require('../utils/logger')


module.exports = {
    /**
     * 首页
     */
    index: function (req, res) {
        res.render('index', {currentTime: new Date()});
    },


    /**
     * 获取 JSSDK 配置信息
     */
    getJSConfig: function (req, res) {
        var data = req.body;
        logger.info(data);
        var param = {
            debug: false,
            jsApiList: ['chooseImage', 'scanQRCode', 'onMenuShareAppMessage',
                'getNetworkType', 'openLocation', 'scanQRCode'],
            url: req.headers.referer
        };
        wxJSSDK.getJSConfig(param, function (err, result) {
            if (!err) {
                res.json(result)
            }
            else {
                res.json({'state': '10001', 'message': '参数错误'})
            }
        })
    },

    wxReply: wechat(config, wechat.text(function (message, req, res) {
        console.log(req.headers.host);
        // message为文本内容
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125035',
        // MsgType: 'text',
        // Content: 'http',
        // MsgId: '5837397576500011341' }
        var keyArray = ['你好', '约吗', '1', '2'];
        var content = message.Content;
        var keyIndex = keyArray.indexOf(content);
        switch (keyIndex) {
            case 0: {
                res.reply({
                    type: "text",
                    content: '您好，大家好才是真的好！demo'
                });

            }
                break;
            case 1: {
                res.reply({
                    type: "text",
                    content: '不约，不约，叔叔我们不约！demo'
                });

            }
                break;
            case 2: {
                res.reply([{
                    title: '登陆页面',
                    description: '去登陆',
                    picurl: 'http://7xq3d5.com1.z0.glb.clouddn.com/wall-6.jpg',
                    url: 'http://ng2.taidii.cn/'
                }]);
            }
                break;
            case 3: {
                var url = require('../utils/wx').getAuthorizeURL(config.domain, '', 'snsapi_userinfo')
                res.reply({
                    type: "text",
                    content: url
                });
            }
                break;
            default:
                res.reply({
                    type: "text",
                    content: '服务器挂掉了，你的要求暂时无法满足……demo'
                });
                break;
        }
    }).image(function (message, req, res, next) {
        res.reply({
            type: "text",
            content: '你发的是图片……demo'
        });
        // message为图片内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359124971',
        // MsgType: 'image',
        // PicUrl: 'http://mmsns.qpic.cn/mmsns/bfc815ygvIWcaaZlEXJV7NzhmA3Y2fc4eBOxLjpPI60Q1Q6ibYicwg/0',
        // MediaId: 'media_id',
        // MsgId: '5837397301622104395' }}).voice(function(message, req, res, next) {
        // TODO
    }).voice(function (message, req, res, next) {
        // message为音频内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125022',
        // MsgType: 'voice',
        // MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
        // Format: 'amr',
        // MsgId: '5837397520665436492' }
    }).video(function (message, req, res, next) {
        // message为视频内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125022',
        // MsgType: 'video',
        // MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
        // ThumbMediaId: 'media_id',
        // MsgId: '5837397520665436492' }
        // TODO
    }).shortvideo(function (message, req, res, next) {
        // message为短视频内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125022',
        // MsgType: 'shortvideo',
        // MediaId: 'OMYnpghh8fRfzHL8obuboDN9rmLig4s0xdpoNT6a5BoFZWufbE6srbCKc_bxduzS',
        // ThumbMediaId: 'media_id',
        // MsgId: '5837397520665436492' }
        // TODO
    }).location(function (message, req, res, next) {
        // message为链接内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125022',
        // MsgType: 'link',
        // Title: '公众平台官网链接',
        // Description: '公众平台官网链接',
        // Url: 'http://1024.com/',
        // MsgId: '5837397520665436492' }
        // TODO
    }).link(function (message, req, res, next) {
        // message为链接内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125022',
        // MsgType: 'link',
        // Title: '公众平台官网链接',
        // Description: '公众平台官网链接',
        // Url: 'http://1024.com/',
        // MsgId: '5837397520665436492' }
        // TODO
    }).event(function (message, req, res, next) {
        // message为事件内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125022',
        // MsgType: 'event',
        // Event: 'LOCATION',
        // Latitude: '23.137466',
        // Longitude: '113.352425',
        // Precision: '119.385040',
        // MsgId: '5837397520665436492' }
        // TODO
    }).device_text(function (message, req, res, next) {
        // message为设备文本消息内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125022',
        // MsgType: 'device_text',
        // DeviceType: 'gh_d3e07d51b513'
        // DeviceID: 'dev1234abcd',
        // Content: 'd2hvc3lvdXJkYWRkeQ==',
        // SessionID: '9394',
        // MsgId: '5837397520665436492',
        // OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
        // TODO
    }).device_event(function (message, req, res, next) {
        // message为设备事件内容
        // { ToUserName: 'gh_d3e07d51b513',
        // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
        // CreateTime: '1359125022',
        // MsgType: 'device_event',
        // Event: 'bind'
        // DeviceType: 'gh_d3e07d51b513'
        // DeviceID: 'dev1234abcd',
        // OpType : 0, //Event为subscribe_status/unsubscribe_status时存在
        // Content: 'd2hvc3lvdXJkYWRkeQ==', //Event不为subscribe_status/unsubscribe_status时存在
        // SessionID: '9394',
        // MsgId: '5837397520665436492',
        // OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
        // TODO
    }).middlewarify()),

}