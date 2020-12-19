<template>
  <div id="enter-content">
    <div class="enter" id="enter">
      <!-- 一个demo -->
      <div class="before"></div>
      <div class="after"></div>

    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, nextTick } from 'vue';
import { currentProportion } from '@/store';
import { $id } from '@/utils';
import {LocalHTMLElement} from '@/const/interface';
import {
  useRotate,
  useCompilerHtml,
} from '@/hooks';
export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    // 添加旋转功能。
    useRotate()
    // 开始解析html内容
    useCompilerHtml();

    nextTick(() => {
      const enterContent: LocalHTMLElement = $id('enter-content');

      watch(currentProportion, (val: number) => {
        if (enterContent) {
          enterContent.style.transform = `scale(${val / 100})`
        }
      }, { immediate: true })
    })
  },
});
</script>

<style lang="scss">
#enter-content{
  width: 100%;
  height: 100%;
}
.enter {
  width: 90%;
  height: 90%;
  background: #f2f2f2;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transform-style: preserve-3d;
  border: 4px solid gray;
}

/*demo*/
.before, .after{
  width: 100%;
  height: 100%;
  position: absolute;
  border: 4px solid gray;
  background: #f1f1f1;
}
.before{
  transform: translateZ(20px);
}
.after{
  transform: translateZ(-20px);
}
</style>
