"use strict";
exports.__esModule = true;
exports.useRotate = void 0;
var vue_1 = require("vue");
var utils_1 = require("@/utils");
exports.useRotate = function () {
    vue_1.nextTick(function () {
        // 获取到当前工具的容器
        var enter = utils_1.$id('enter');
        if (!enter) {
            return;
        }
        // 鼠标点下事件, 鼠标点下之后，鼠标移动事件才生效
        window.onmousedown = function (parent) {
            var originPosition = enter.style.transform;
            var positionData = originPosition.match(/rotateY\((.+)deg\) rotateX\((.+)deg\)/) || ['', 0, 0];
            var originx = parseInt(positionData[1]) || 0;
            var originY = parseInt(positionData[2]) || 0;
            var parentX = parent.clientX;
            var parentY = parent.clientY;
            window.onmousemove = function (child) {
                var childX = child.clientX;
                var childY = child.clientY;
                var diffX = ~~((parentX - childX) / 4);
                var diffY = ~~((parentY - childY) / 4);
                var rotateY = originx + -diffX;
                var rotateX = originY + diffY;
                // diffX 为正，表示绕 y 轴逆时针转动
                // diffX 为负，表示绕 y 轴顺时针转动
                // diffY 为正，表示绕 x 轴逆时针转动
                // diffY 为负，表示绕 x 轴顺时针转动
                // 容器转动，每次转动 5°
                enter.style.transform = "rotateY(" + rotateY + "deg) rotateX(" + parseInt("" + rotateX) + "deg)";
            };
        };
        // 鼠标抬起后，取消鼠标移动事件
        window.onmouseup = function () {
            window.onmousemove = null;
        };
    });
};
