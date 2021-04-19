import { toArray, sort, getFilter } from '@/utils'
import { ref, Ref } from 'vue';

export const useCompilerHtml = (id = '#box') => {
  // 解析需要在 window 渲染完成之后
  window.onload = function () {
    const result = {};
    const atomicList: Ref = ref([]);
    atomicList.value =  toArray(id ? [document?.querySelector(id)] : document.body.children)

    // 开始前需要将dom中的内容过滤
    start(getFilter(atomicList.value), result);
  };
};

// 开始解析dom标签
export const start = (list: Element[], result = {}) => {
  list = sort(list, '', result);
  // 打印log
  log(list);
};


export const log = (list: Element[]) => {
  list.forEach(item => {
    if (item.children) {
      log(toArray(item.children));
    }
  })
}
