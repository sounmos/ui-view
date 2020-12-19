import { toArray, sort, getFilter } from '@/utils'

export const useCompilerHtml = (id = '') => {
  // 解析需要在 window 渲染完成之后
  window.onload = function () {
    if(id) {
      const div: Element | null = document.querySelector(id);
    } else {
      const atomicList: HTMLElement[] = toArray(document.body.children);
      // 开始前需要将dom中的内容过滤
      start(getFilter(atomicList));
    }
  };
};

// 开始解析dom标签
export const start = (list: Element[]) => {
  list = sort(list);
  // 打印log
  log(list);
};


export const log = (list: Element[]) => {
  list.forEach(item => {
    console.log(item);
    if (item.children) {
      log(toArray(item.children));
    }
  })
}
