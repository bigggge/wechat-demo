/**
 * wxOAuth.js
 *
 *     具体而言，网页授权流程分为四步：
 *  引导用户进入授权页面同意授权，获取code
 *  通过code换取网页授权access_token（与基础支持中的access_token不同）
 *  如果需要，开发者可以刷新网页授权access_token，避免过期
 *  通过网页授权access_token和openid获取用户基本信息（支持UnionID机制）
 * Created by ice on 2017/5/22 下午4:01.
 */

var client = require('./wxCommon').client;
var logger = require('../logger');

module.exports = {

    /**
     * 获取授权页面的URL地址
     *
     * @param {String} redirect 授权后要跳转的地址
     * @param {String} state 开发者可提供的数据
     * @param {String} scope 作用范围，值为snsapi_userinfo和snsapi_base，前者用于弹出，后者用于跳转
     */
    getAuthorizeURL: function (redirect, state, scope) {
        return client.getAuthorizeURL(redirect, state, scope)
    },

    /**
     * 根据code，获取用户信息
     *
     * @param code
     * @param callback
     */
    getUserByCode: function (code, callback) {
        client.getUserByCode(code, function (err, result) {
            if (err) {
                logger.error(err)
                logger.error(result);
                callback(err, result)
            } else {
                logger.info(result);
                callback(err, result)
            }
        })
    },

    /**
     * 根据授权获取到的code，换取access token和openid
     * 获取openid之后，可以调用`wechat.API`来获取更多信息
     */
    getAccessToken: function (code, callback) {
        client.getAccessToken(code, function (err, result) {
            if (err) {
                logger.error(err)
                logger.error(result);
                callback(err, result)
            } else {
                logger.info(result);
                callback(err, result)
            }
        })
    },

    /**
     * 根据openid，获取用户信息。
     * 当access token无效时，自动通过refresh token获取新的access token。然后再获取用户信息
     */
    getUser: function (openid, callback) {
        client.getUser(openid, function (err, result) {
            if (err) {
                logger.error(err);
                logger.error(result);
                callback(err, result)
            } else {
                logger.info(result);
                callback(err, result)
            }
        })
    }
};
