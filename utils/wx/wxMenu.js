/**
 * wxService.js
 *
 * Created by xiepan on 2016/11/29 上午11:57.
 */

var wxCommon = require('./wxCommon')
var api = wxCommon.wechatAPI;

module.exports = {
    createMenu: function (menus) {
        api.createMenu(menus, function (err, result) {
            if (err) {
                console.error(err)
            }
            console.log(result)

        });
    }
};
