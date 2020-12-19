import {
  BasicAny,
  LocalHTMLElement,
  ExpandElement,
} from '@/const/interface';
import { filterTagName } from '@/const/state/tag-filter';

export const $id = (id: string): LocalHTMLElement => document.getElementById(id);

// 获取非行内样式
export const getStyle = (obj: ExpandElement, attr: string) => {
  if(obj.currentStyle) {
    return obj.currentStyle[attr];
  } else {
    // @ts-ignore
    return getComputedStyle(obj,false)[attr];
  }
};

// 获取 translateZ 的样式
export const getTransformZValue = (item: Element) => {
  return getStyle((<ExpandElement>item), 'transformStyle')
};

// 获取 z-index 的值
export const getZIndex = (item: Element) => {
  return getStyle((<ExpandElement>item), 'z-index');
};

// 排序子序列
export const sortChildren = (dom: Element) => {
  if (dom?.children?.length) {
    let type = '';
    if (getStyle((<ExpandElement>dom), 'transformStyle') === 'preserve-3d') {
      type = 'transformStyle';
    }
    sort(toArray(dom?.children), type);
  }
};

// 快速排序，排列得到的组合
export const quickSort = (arr: Element[], type = ''): Element[] => {
  const getArrValue = type ? getZIndex : getTransformZValue;

  if (arr.length <= 1) {
    sortChildren(arr[0]);
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2);

  const pivot = arr.splice(pivotIndex, 1)[0];

  sortChildren(pivot);

  const left = [];

  const right = [];

  for (let i = 0; i < arr.length; i++){
    if (getArrValue(arr[i]) < getArrValue(pivot)) {

      left.push(arr[i]);

    } else {

      right.push(arr[i]);

    }

  }

  return quickSort(left).concat([pivot], quickSort(right));

};

// 按照 transformStyle 来排序
export const quickSortByTransformStyle = (list: Element[]): Element[] => {
  if (!list.length) {
    return [];
  }
  return quickSort(list, 'transformStyle');
};

// 按照 z-index 来排序
export const quickSortByZIndex = (list: Element[]): Element[] => {
  if (!list.length) {
    return [];
  }
  return quickSort(list);
};

// 类数组转换为数组
export const toArray = (fData: BasicAny): BasicAny[] => Array.from(fData);

// 获取过滤后的元素
export const getFilter = (list: HTMLElement[]) => {
  return list.filter(item =>
    !filterTagName.includes(item.tagName.toLowerCase()) &&
    item.style.display !== 'none'
  )
};

// 根据层级将元素排序
export const sort = (list: Element[], type = ''): Element[] => {
  // 数组中只有一个元素，直接返回数组
  if (list.length <= 1) return list;

  if (!type) {
    return quickSortByZIndex(list);
  }
  return quickSortByTransformStyle(list);

  return list;
};
