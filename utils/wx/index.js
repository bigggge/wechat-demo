/**
 * index.js
 *
 * Created by ice on 2017/5/23 下午4:15.
 */


/**
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
module.exports = Object.assign(
    require('./wxCommon'),
    require('./wxOAuth'),
    require('./wxJSSDK'),
    require('./wxMenu')
);