<template>
  <div class="proportion-wrapper">
    <!-- 最小宽度10 ，最大宽度 200 -->
    <div id="proportion-minus">-</div>
    <div>
      <div class="proportion-content" id="proportion-content">
        <div class="proportion-circle" id="proportion-circle">
          <div class="proportion-circle-small"></div>
        </div>
      </div>
    </div>
    <div id="proportion-add">+</div>
    <div class="proportion-text">
      {{currentProportion}}%
    </div>
  </div>
</template>

<script lang="ts">
// 页面缩放控制组件
import { nextTick, ref, Ref } from 'vue';
import { $id } from '@/utils';
import { LocalHTMLElement } from '@/const/interface';
import { currentProportion } from '@/store';

export default {
  name: 'ScaleProportion',
  setup() {
    nextTick(() => {
      const proportionValue: Ref<number> = ref(10);

      const content: LocalHTMLElement = $id('proportion-content');
      const circle: LocalHTMLElement = $id('proportion-circle');
      const minus: LocalHTMLElement = $id('proportion-minus');
      const add: LocalHTMLElement = $id('proportion-add');

      if (minus && add && circle) {

        if (content) {
          content.style.width = `${currentProportion.value + 10}px`
        }

        function changeContentWidth() {
          if (!content) {
            return;
          }
          const offsetWidth: number = content.offsetWidth;

          let lastWidth: number = offsetWidth + proportionValue.value;
          currentProportion.value += proportionValue.value;
          if (lastWidth > 210) {
            lastWidth = 210;
            currentProportion.value = 200;
          }
          if (lastWidth <= 10) {
            lastWidth = 10;
            currentProportion.value = 0;
          }
          content.style.width = `${lastWidth}px`
        }

        minus.onclick = function () {
          proportionValue.value = -10;
          changeContentWidth();
        }
        add.onclick = function () {
          proportionValue.value = 10;
          changeContentWidth();
        }
      }
    })

    return {
      currentProportion,
    };
  },
};
</script>

<style lang="scss">
.proportion{
  &-wrapper{
    width: 210px;
    height: 4px;
    background: darkgray;
  }
  &-content{
    width: 110px;
    height: 4px;
    background: dodgerblue;
    position: relative;
  }
  &-circle{
    width: 10px;
    height: 10px;
    background: dodgerblue;
    border-radius: 50%;
    position: absolute;
    top: -3px;
    right: 0;
  }
  &-circle-small{
    width: 4px;
    height: 4px;
    background: white;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    border-radius: 50%;
  }
  &-text{
    position: absolute;
    right: -70px;
    top: -10px;
    user-select: none;
  }
}
#proportion{
  &-minus, &-add{
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 16px;
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    user-select: none;
  }
  &-minus{
    left: -24px;
    top: -8px;
  }
  &-add{
    right: -24px;
    top: -8px;
  }
}
</style>
