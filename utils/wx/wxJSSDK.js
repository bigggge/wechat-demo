/**
 * wxJSSDK.js
 *
 * Created by ice on 2017/5/23 下午2:37.
 */

var wechatAPI = require('./wxCommon').wechatAPI;

module.exports = {
    /**
     * 获取微信JS SDK Config的所需参数
     *
     * @param {Object} param 参数
     * @param {Function} callback 回调函数
     */
    getJSConfig: function (param, callback) {
        wechatAPI.getJsConfig(param, function (err, result) {
            callback(err, result)
        });
    },
};