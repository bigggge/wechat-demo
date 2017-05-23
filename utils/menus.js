/**
 * menus.js
 *
 * Created by ice on 2017/5/23 下午5:04.
 */


module.exports = {
    "button": [
        {
            "type": "view",
            "name": "网页授权",
            "url": require('../config').domain
        },
        {
            "name": "菜单",
            "sub_button": [
                {
                    "type": "view",
                    "name": "搜索",
                    "url": "http://www.soso.com/"
                },
                {
                    "type": "click",
                    "name": "赞一下我们",
                    "key": "V1001_GOOD"
                }]
        }]
}