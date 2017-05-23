/**
 * 微信认证中间件
 */

var wxOAuth = require('../utils/wx/wxOAuth');
var config = require('../config');

module.exports = function (req, res, next) {
    var code = req.query.code || ''
    // token = req.cookies.Authorization;
    // if (token) {
    //     return next()
    // }

    wxOAuth.getAccessToken(code, function (err, result) {
        if (err) {
            var url = wxOAuth.getAuthorizeURL(config.domain, '', 'snsapi_userinfo')
            return res.redirect(url)
        }
        var openid = result.data.openid;
        wxOAuth.getUser(openid, function (err, result) {
            if (result) {
                return next()
            }
        });
    });
};