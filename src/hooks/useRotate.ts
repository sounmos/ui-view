import { nextTick } from 'vue';
import { $id } from '@/utils';
import { BasicAny, LocalHTMLElement } from '@/const/interface';

export const useRotate = () => {
  nextTick(() => {
    // 获取到当前工具的容器
    const enter: LocalHTMLElement = $id('enter');

    if (!enter) {
      return;
    }


    // 鼠标点下事件, 鼠标点下之后，鼠标移动事件才生效
    window.onmousedown = function (parent: MouseEvent) {
      const originPosition: string = enter.style.transform;
      const positionData: (BasicAny)[] = originPosition.match(/rotateY\((.+)deg\) rotateX\((.+)deg\)/) || ['', 0, 0]
      const originx: number = parseInt(positionData[1]) || 0;
      const originY: number = parseInt(positionData[2]) || 0;

      const parentX = parent.clientX;
      const parentY = parent.clientY;

      window.onmousemove = function (child: MouseEvent) {
        const childX = child.clientX;
        const childY = child.clientY;

        const diffX = parentX - childX;
        const diffY = parentY - childY;

        // diffX 为正，表示绕 y 轴逆时针转动
        // diffX 为负，表示绕 y 轴顺时针转动
        // diffY 为正，表示绕 x 轴逆时针转动
        // diffY 为负，表示绕 x 轴顺时针转动

        // 容器转动，每次转动 5°
        enter.style.transform = `rotateY(${originx + -diffX}deg) rotateX(${originY + diffY}deg)`;
      }

    }

    // 鼠标抬起后，取消鼠标移动事件
    window.onmouseup = function () {
      window.onmousemove = null;
    }
  })
};
