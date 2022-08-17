import { useState, useEffect, useCallback, useContext, useMemo } from 'react';
import { Checkbox } from 'antd';
import { CheckboxProps, CheckboxChangeEvent } from 'antd/es/checkbox';
import classNames from 'classnames';
// import debounce from 'lodash/debounce';
import { CaretRightOutlined } from '@ant-design/icons';
import { invoke } from '../../utils';
import Context from '../../Context';
import { Data } from '../../type';
import styles from './index.module.less';

const EasyCheckbox = (
  props: CheckboxProps & {
    expand?: boolean;
    onExpand?: (expand: boolean) => void;
    /**
     * 设置为叶子节点. 为 false 时会强制将其作为父节点
     */
    isLeaf?: boolean;
    data: Data;
    firstCenterCol?: boolean;
    parentChecked?: boolean;
    setChecked?: (value: boolean) => void;
    setParentIndeterminate?: (value: boolean) => void;
    setParentChecked?: (value: boolean) => void;
    setIndeterminate?: (value: boolean) => void;
  },
) => {
  const {
    expand: userExpand,
    className,
    onExpand,
    isLeaf,
    data,
    checked,
    firstCenterCol, // 是否是兄弟节点中的第一个
    indeterminate,
    parentChecked,
    setChecked,
    setIndeterminate,
    setParentChecked,
    setParentIndeterminate,
  } = props;
  const [expand, setExpand] = useState<boolean>(userExpand ?? false);
  // 最后一级的选中状态自己控制
  const [lasetChecked, _setLastChecked] = useState<boolean>(
    data.checked ?? false,
  );
  const showExpand = useMemo(() => {
    return !isLeaf || (firstCenterCol && data?.parent?.childList.length > 1);
  }, [isLeaf, firstCenterCol]);
  const { onChange: userOnChange } = useContext(Context);

  const setLastChecked = useCallback((value: boolean) => {
    // 最后一级是没有半选状态
    data.checked = value;
    _setLastChecked(value);
  }, []);

  const calcParentStatus = useCallback((_data: Data) => {
    // 计算父元素以及子元素 indeterminate
    const { parent } = _data;
    if (parent == null || parent.childList.length <= 0) return;
    const selectKeysLength = parent.childList.filter((o) => o.checked).length;
    if (selectKeysLength === parent.childList.length) {
      // 全选
      invoke(setParentIndeterminate, false);
      invoke(setParentChecked, true);
    } else if (selectKeysLength > 0) {
      // 半选
      invoke(setParentIndeterminate, true);
      invoke(setParentChecked, false);
    } else {
      // 全不选
      const indeterminateTmp = parent.childList.some((o) => o.indeterminate);
      invoke(setParentIndeterminate, indeterminateTmp);
      invoke(setParentChecked, false);
    }
  }, []);

  const onChange = useCallback(
    (e: CheckboxChangeEvent) => {
      data && (data.checked = e.target.checked);
      invoke(setChecked, e.target.checked);
      if (data.checked) {
        setIndeterminate && setIndeterminate(false);
      }
      if (setChecked == null) {
        // 最后的子元素
        // 没有控制checked状态, 需要手动触发
        setLastChecked(data.checked);
        calcParentStatus(data);
      }
      userOnChange && userOnChange();
    },
    [userOnChange, data],
  );

  // 点击展开/收缩
  const onClick = useCallback(() => {
    setExpand(!expand);
    invoke(onExpand, !expand);
  }, [expand, userExpand]);

  useEffect(() => {
    if (userExpand == null) return;
    setExpand(userExpand);
  }, [userExpand]);

  useEffect(() => {
    data && (data.checked = !!checked);
    // 计算父元素的状态
    calcParentStatus(data);
  }, [checked, indeterminate, data]);

  useEffect(() => {
    if (
      parentChecked == null ||
      data.parent == null ||
      data.parent.indeterminate
    ) {
      return;
    }
    // 最后一级, 父元素选中, 则选中
    setLastChecked(parentChecked);
  }, [parentChecked]);

  return (
    <div
      className={classNames(styles.checkboxContainer, className)}
      title={data.name}
    >
      {showExpand && (
        <CaretRightOutlined
          className={classNames(
            {
              [styles.rotate90]: userExpand ?? expand,
            },
            styles.icon,
          )}
          onClick={onClick}
        />
      )}
      <Checkbox
        {...props}
        className={classNames(styles.checkbox, {
          [styles.noLeaf]: !showExpand,
        })}
        checked={checked ?? lasetChecked}
        onChange={onChange}
      />
    </div>
  );
};

export default EasyCheckbox;
