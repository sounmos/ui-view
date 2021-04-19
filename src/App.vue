<template>
  <router-view/>
  <!-- 缩放控制 -->
  <div class="operation">
    <ScaleProportion></ScaleProportion>
  </div>
  <test v-if="showTest"></test>
</template>

<script lang="ts">
import ScaleProportion from '@/components/ScaleProportion.vue';
import { defineComponent, ref, Ref } from 'vue';
import test from './test/index.vue';

export default defineComponent({
  name: 'App',
  components: {
    ScaleProportion,
    test,
  },
  setup() {
    const showTest: Ref = ref(false)
    if (process.env.NODE_ENV === 'development') {
      showTest.value = true;
    }
    return {
      showTest,
    };
  }
});
</script>

<style lang="scss">
html,body, #app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
html, body, div, p, img {
  margin: 0;
  padding: 0;
}
.operation{
  position: fixed;
  top: 30px;
  left: 40px;
  z-index: 99999;
}
</style>
