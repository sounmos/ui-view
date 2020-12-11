<template>
  <router-view/>
  <!-- 缩放控制 -->
  <div class="operation">
    <ScaleProportion></ScaleProportion>
  </div>
</template>

<script lang="ts">
import ScaleProportion from '@/components/ScaleProportion.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    ScaleProportion,
  },
});
</script>

<style lang="scss">
html,body, #app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app{
  transform-style: preserve-3d;
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
