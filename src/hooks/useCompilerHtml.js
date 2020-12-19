"use strict";
exports.__esModule = true;
exports.start = exports.useCompilerHtml = void 0;
var utils_1 = require("@/utils");
var tag_filter_1 = require("@/const/state/tag-filter");
exports.useCompilerHtml = function (html) {
    var div = document.createElement('div');
    div.innerHTML = html;
    // 解析需要在 window 渲染完成之后
    window.onload = function () {
        var atomicList = utils_1.toArray(document.body.children);
        // 开始前需要将dom中的内容过滤
        exports.start(atomicList.filter(function (item) { return !tag_filter_1.filterTagName.includes(item.tagName.toLowerCase()); }));
    };
};
// 开始解析dom标签
exports.start = function (list) {
    list = utils_1.sort(list);
    console.log(list);
};
