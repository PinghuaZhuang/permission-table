/**
 * 遍历树状结构数据
 * @param {Array<any>} arr 目标数状结构的数据
 * @param {Function} fn 回调
 * @param {String} childrenField children对应的字段名
 * @example [{ name: 'xxx', children: [{ name: 'childrenName' }] }]
 */
export function each<T>(
  arr: T[] = [],
  fn: (data: T, parent?: T, level?: number) => void,
  childrenField = 'childList',
  parent?: T,
  parentLevel?: number,
) {
  const level = parent == null ? 0 : (parentLevel as number) + 1;
  arr.forEach((data) => {
    const list = (data as any)[childrenField];
    fn(data, parent, level);
    if (list) {
      each(list, fn, childrenField, data, level);
    }
  });
}

export function invoke(fn?: (...reset: any[]) => void, ...rest: any[]) {
  return fn && fn(...rest);
}

let canvas: HTMLCanvasElement;

export function px2width(str: string, font = `normal 14px Robot`): number {
  canvas = canvas || document.createElement('canvas');
  const context = canvas.getContext('2d');
  if (context == null) return 0;

  if (font) {
    context.font = font;
  }
  const metrics = context.measureText(str);
  return metrics.width;
}
