import { useState, useEffect, useCallback, useContext } from 'react';
import { Checkbox } from 'antd';
import { CheckboxProps, CheckboxChangeEvent } from 'antd/es/checkbox';
import classNames from 'classnames';
import { CaretRightOutlined } from '@ant-design/icons';
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
    setChecked: React.Dispatch<React.SetStateAction<boolean>>;
    setParentIndeterminate: React.Dispatch<React.SetStateAction<boolean>>;
    setParentChecked: React.Dispatch<React.SetStateAction<boolean>>;
    // setIndeterminate: React.Dispatch<React.SetStateAction<boolean>>;
  },
) => {
  const {
    expand: userExpand,
    className,
    onExpand,
    isLeaf,
    data,
    checked,
    setChecked,
    setParentChecked,
    setParentIndeterminate,
  } = props;
  const [expand, setExpand] = useState<boolean>(userExpand ?? false);
  const { onChange: userOnChange } = useContext(Context);

  const onChange = useCallback(
    (e: CheckboxChangeEvent) => {
      setChecked(e.target.checked);
      userOnChange && userOnChange();
    },
    [userOnChange],
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
    // 计算父元素以及子元素 indeterminate
    const { parent } = data;
    if (parent == null) return;
    const selectKeysLength = parent.childList.filter((o) => o.checked).length;
    if (selectKeysLength === parent.childList.length) {
      // 全选
      setParentChecked && setParentChecked(true);
      setParentIndeterminate && setParentIndeterminate(false);
    } else if (selectKeysLength > 0) {
      // 半选
      setParentChecked && setParentChecked(false);
      setParentIndeterminate && setParentIndeterminate(true);
    } else {
      setParentChecked && setParentChecked(false);
      setParentIndeterminate && setParentIndeterminate(false);
    }
  }, [checked, data]);

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
        onChange={onChange}
      />
    </div>
  );
};

export default EasyCheckbox;
