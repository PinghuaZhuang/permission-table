import { useState, useCallback, useContext, useMemo, useEffect } from 'react';
import { Checkbox } from 'antd';
import { CheckboxProps, CheckboxChangeEvent } from 'antd/es/checkbox';
import classNames from 'classnames';
import { CaretRightOutlined } from '@ant-design/icons';
import { invoke, px2width } from '../../utils';
import Context from '../../Context';
import TreeModel from '../../TreeModel';
import styles from './index.module.less';

const EasyCheckbox = (
  props: CheckboxProps & {
    expand?: boolean;
    onExpand?: (expand: boolean) => void;
    /**
     * 设置为叶子节点. 为 false 时会强制将其作为父节点
     */
    isLeaf?: boolean;
    data: TreeModel;
    firstCenterCol?: boolean;
  },
) => {
  const {
    data,
    isLeaf,
    className,
    firstCenterCol, // 是否是兄弟节点中的第一个
    expand: userExpand,
    onExpand,
  } = props;
  const [authOverLong, setAuthOverLong] = useState<boolean>(true);
  const showExpand = useMemo(() => {
    return (
      (!isLeaf && authOverLong) ||
      (firstCenterCol &&
        // data.level === 1 &&
        data?.parent?.childList &&
        data.parent.childList.length > 1)
    );
  }, [isLeaf, firstCenterCol, authOverLong]);
  const {
    onChange: userOnChange,
    dispatchMap,
    dispatchWithDiff,
    authWidth,
    maxLevel,
  } = useContext(Context);
  const [checked, setChecked] = useState<boolean>(false);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);

  useMemo(() => {
    if (dispatchMap[data.id] == null) {
      dispatchMap[data.id] = {
        checked: setChecked,
        indeterminate: setIndeterminate,
      };
    } else {
      dispatchMap[data.id].checked = setChecked;
      dispatchMap[data.id].indeterminate = setIndeterminate;
    }
  }, [dispatchMap, data]);

  const onChange = useCallback(
    (e: CheckboxChangeEvent) => {
      const value = e.target.checked;
      const diff = data.setCheckedByIdReturnDiff(data.id, value);
      dispatchWithDiff(diff);
      userOnChange();
    },
    [userOnChange, dispatchWithDiff, data],
  );

  // 点击展开/收缩
  const onClick = useCallback(() => {
    invoke(onExpand, !userExpand);
  }, [userExpand]);

  useEffect(() => {
    if (authWidth <= 0 || data.level !== maxLevel - 1) return;
    let length = 0;
    data.each(({ name }) => {
      length += px2width(name) + 16 + 37 + 16;
    });
    if (authWidth > length) {
      // @ts-ignore
      data.authOverLong = false;
      setAuthOverLong(false);
    }
  }, [authWidth, data]);

  return (
    <div
      className={classNames(styles.checkboxContainer, className)}
      title={data.name}
    >
      {showExpand && (
        <CaretRightOutlined
          className={classNames(
            {
              [styles.rotate90]: userExpand,
            },
            styles.icon,
          )}
          onClick={onClick}
        />
      )}
      <Checkbox
        {...props}
        indeterminate={indeterminate}
        checked={checked}
        className={classNames(styles.checkbox, {
          [styles.noLeaf]: !showExpand,
        })}
        onChange={onChange}
      />
    </div>
  );
};

export default EasyCheckbox;
