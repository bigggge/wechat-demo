/**
 * router.js
 *
 * Created by ice on 2017/5/23 下午2:41.
 */


var express = require('express'),
    router = express.Router(),
    oauth = require('../middleware/oauth'),
    controller = require('../controller/index'),
    wx = require('../utils/wx');


router.get('/', oauth, controller.index);

router.use('/wechat', controller.wxReply);

router.post('/getjsconfig', controller.getJSConfig);

wx.createMenu(require('../utils/menus'));

module.exports = router;