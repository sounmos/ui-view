<template>
  <div id="box">
    <div class="d1">
      <p>test p element</p>
      <span>test span element</span>
    </div>
    <div class="d2"></div>
    <div class="d3"></div>
    <div class="d4"></div>
    <div class="d5"></div>
    <div class="d6"></div>
    <div class="d7"></div>
    <div class="d8"></div>
    <div class="d9"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'index',
};
</script>

<style lang="scss">
#box{
  width: 100px;
  height: 100px;
  position: absolute;
  left: -1000px;
  transform: translateX(10px);
  transform-style: preserve-3d;
}
#box div{
  width: 100px;
  height: 100px;
  position: absolute;
}
.d1{
  background: red;
  transform: translateZ(10px);
  z-index: 2;
}
.d2{
  background: yellow;
  transform: translateZ(12px);
  z-index: 3;
}
.d3{
  background: greenyellow;
  transform: translateZ(3px);
  z-index: 4;
}
.d4{
  background: purple;
  transform: translateZ(4px);
  z-index: 5;
}
.d5{
  background: black;
  transform: translateZ(5px);
  z-index: 6;
}
.d6{
  background: blue;
  transform: translateZ(6px);
  z-index: 7;
}
.d7{
  background: dodgerblue;
  transform: translateZ(7px);
  z-index: 8;
}
.d8{
  background: orange;
  transform: translateZ(8px);
  z-index: 9;
}
.d9{
  background: salmon;
  transform: translateZ(9px);
  z-index: 1;
}
</style>
