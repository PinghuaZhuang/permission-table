import merge from 'lodash/merge';

export interface Data {
  id: string | number;
  pId: string | number;
  name: string;
  childList: Data[];
  className?: string;
  level: number;
}

type Map = {
  [P: string]: TreeModel;
};

type Diff = {
  [P: string]: {
    indeterminate?: boolean;
    checked?: boolean;
  };
};

type EachCallback = (data: TreeModel, parent: TreeModel, index: number) => void;

let diff: Diff = {};

class TreeModel implements Data {
  #checked: boolean = false;
  #prechecked: boolean = false;
  #indeterminate: boolean = false;
  #preindeterminate: boolean = false;
  id: Data['id'];
  pId: Data['pId'];
  level: Data['level'];
  options: Data;
  name: Data['name'];
  childList: TreeModel[];
  parent?: TreeModel;
  className?: Data['className'];
  map: Map;

  constructor(options: Data, parent?: TreeModel) {
    this.options = Object.assign({}, options);
    this.name = options.name;
    this.className = options.className;
    this.id = options.id;
    this.pId = options.pId;
    this.parent = parent;
    this.level = parent == null ? 0 : parent.level + 1;
    this.map = parent == null ? { [this.id]: this } : parent.map;
    this.childList = options.childList.map((o) => {
      const target = new TreeModel(o, this);
      this.map[target.id] = target;
      return target;
    });
  }

  isRoot() {
    return this.level === 0;
  }

  get checked() {
    return this.#checked;
  }
  get indeterminate() {
    return this.#indeterminate;
  }

  diff() {
    let targetDiff = diff[this.id];

    if (this.#prechecked !== this.#checked) {
      targetDiff = targetDiff ?? {};
      targetDiff.checked = this.#checked;
    }
    if (this.#preindeterminate !== this.#indeterminate) {
      targetDiff = targetDiff ?? {};
      targetDiff.indeterminate = this.#indeterminate;
    }
    if (targetDiff) {
      diff[this.id] = targetDiff;
    }
    return targetDiff;
  }

  /**
   * checked 中要使用 indeterminate. 赋值的时候注意顺序.
   */
  setChecked(value: boolean, isChildren?: boolean) {
    this.#prechecked = this.#checked;
    this.#checked = value;

    if (value) {
      // 选中后, 非半选
      this.#preindeterminate = this.#indeterminate;
      this.#indeterminate = false;
    }

    // 自身状态变化 && 非递归子元素.
    // 避免递归子元素的时候, 重复计算父元素的状态.
    if (this.diff() && this.parent && !isChildren) {
      // 自身状态改变后计算父元素的状态
      this.calcParentStatus();
    }

    if (value) {
      // 选中后, 子元素全部选中
      this.each((o) => {
        o.setIndeterminate(false, true);
        o.setChecked(true, true);
      });
    } else if (!this.indeterminate) {
      // 取消选中后, 子元素全部取消选中
      this.each((o) => {
        o.setIndeterminate(false, true);
        o.setChecked(false, true);
      });
    }
  }

  // 这里不需要进行 diff 监测.
  setIndeterminate(value: boolean, isChildren?: boolean) {
    this.#preindeterminate = this.#indeterminate;
    this.#indeterminate = value;

    if (value) {
      // 半选后, 父元素也半选
      if (this.parent && !isChildren) {
        this.parent.setIndeterminate(true);
      }
    }
  }

  setCheckedReturnDiff(id: Data['id'], value?: boolean): Diff {
    diff = {};
    const target = this.map[id];
    if (target == null) return {};
    target.setChecked(value ?? true);
    const ret = Object.assign({}, diff);
    diff = {};
    return ret;
  }

  selectKeys(keys: Data['id'][]) {
    const diffTmp = {};
    keys.forEach((o) => {
      merge(diffTmp, this.setCheckedReturnDiff(o));
    });
    return diffTmp;
  }

  /**
   * 计算父元素的状态
   */
  calcParentStatus() {
    if (this.parent == null) return;
    const { childList } = this.parent;
    const { parent } = this;
    const { length } = childList;
    if (length <= 0) return;

    const selectKeysLength = childList.filter((o) => o.checked).length;
    parent.#prechecked = parent.#checked;
    parent.#preindeterminate = parent.#indeterminate;

    // console.log('selectKeysLength', selectKeysLength, length);

    if (selectKeysLength === length) {
      // 全选
      parent.#checked = true;
      parent.#indeterminate = false;
    } else if (selectKeysLength > 0) {
      // 半选
      parent.#indeterminate = true;
      parent.#checked = false;
    } else {
      // 全不选
      parent.#indeterminate = false;
      parent.#checked = false;
    }

    // 父元素状态变化, 递归上去
    const targetDiff = parent.diff();
    if (targetDiff) {
      parent.calcParentStatus();
    }
  }

  each(fn: EachCallback) {
    this.childList.forEach((data, index) => {
      fn(data, this, index);
    });
  }

  eachDeep(fn: EachCallback) {
    this.childList.forEach((data, index) => {
      fn(data, this, index);
      data.eachDeep(fn);
    });
  }

  eachDeepAfter(fn: EachCallback) {
    this.childList.forEach((data, index) => {
      data.eachDeep(fn);
      fn(data, this, index);
    });
  }
}

export default TreeModel;
