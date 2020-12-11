<template>
  <div id="enter-content">
    <div class="enter"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, nextTick } from 'vue';
import { currentProportion } from '@/store';
import { $id } from '@/utils';
import {LocalHTMLElement} from '@/const/interface';

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {

    nextTick(() => {
      const enterContent: LocalHTMLElement = $id('enter-content');

      watch(currentProportion, (val: number) => {
        if (enterContent) {
          enterContent.style.transform = `scale(${val / 100})`
        }
      })
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
  width: 100%;
  height: 100%;
  background: #f2f2f2;
  transform: rotateZ(45deg);
}
</style>
