import { useState, useEffect, useCallback, useContext } from 'react';
import { Checkbox } from 'antd';
import { CheckboxProps, CheckboxChangeEvent } from 'antd/es/checkbox';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
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
  const { onChange: userOnChange } = useContext(Context);

  const setLastChecked = useCallback((value: boolean) => {
    // 最后一级是没有半选状态
    data.checked = value;
    _setLastChecked(value);
  }, []);

  // FIXED: 防止 selectKeys 数据错误引起死循环
  const calcParentStatus = useCallback(
    debounce((_data: Data) => {
      // 计算父元素以及子元素 indeterminate
      const { parent } = _data;
      if (parent == null || parent.childList.length <= 0) return;
      const selectKeysLength = parent.childList.filter((o) => o.checked).length;
      if (selectKeysLength === parent.childList.length) {
        // 全选
        setParentChecked && setParentChecked(true);
        setParentIndeterminate && setParentIndeterminate(false);
      } else if (selectKeysLength > 0) {
        // 半选
        setParentChecked && setParentChecked(false);
        // invoke(setParentChecked, false);
        setParentIndeterminate && setParentIndeterminate(true);
      } else {
        // 全不选
        setParentChecked && setParentChecked(false);
        setParentIndeterminate &&
          setParentIndeterminate(parent.childList.some((o) => o.indeterminate));
      }
    }, 10),
    [],
  );

  const onChange = useCallback(
    (e: CheckboxChangeEvent) => {
      data && (data.checked = e.target.checked);
      setChecked && setChecked(e.target.checked);
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

  const onClick = useCallback(() => {
    setExpand(!expand);
    onExpand && onExpand(!expand);
  }, [expand, userExpand]);

  useEffect(() => {
    if (userExpand == null) return;
    setExpand(userExpand);
  }, [userExpand]);

  useEffect(() => {
    data && (data.checked = !!checked);
    calcParentStatus(data);
  }, [checked, indeterminate, data]);

  useEffect(() => {
    if (
      parentChecked == null ||
      data.parent == null ||
      data.parent.indeterminate
    )
      return;
    setLastChecked(parentChecked);
  }, [parentChecked]);

  return (
    <div className={classNames(styles.checkboxContainer, className)}>
      {!isLeaf && (
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
          [styles.noLeaf]: isLeaf,
        })}
        checked={checked ?? lasetChecked}
        onChange={onChange}
      />
    </div>
  );
};

export default EasyCheckbox;
