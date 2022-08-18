import { useState, useEffect, useCallback, useContext, useMemo } from 'react';
import { Checkbox } from 'antd';
import { CheckboxProps, CheckboxChangeEvent } from 'antd/es/checkbox';
import classNames from 'classnames';
import { CaretRightOutlined } from '@ant-design/icons';
import { invoke } from '../../utils';
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
  const showExpand = useMemo(() => {
    return (
      !isLeaf ||
      (firstCenterCol &&
        data?.parent?.childList &&
        data.parent.childList.length > 1)
    );
  }, [isLeaf, firstCenterCol]);
  const { onChange: userOnChange, dispatchMap } = useContext(Context);
  const [checked, setChecked] = useState<boolean>(data.defaultChecked ?? false);
  const [indeterminate, setIndeterminate] = useState<boolean>(false);

  useMemo(
    () =>
      (dispatchMap[data.id] = {
        checked: setChecked,
        indeterminate: setIndeterminate,
      }),
    [dispatchMap],
  );

  const onChange = useCallback(
    (e: CheckboxChangeEvent) => {
      const value = e.target.checked;
      console.log(e);
      // TODO: 获取diff
      const diff = data.setCheckedReturnDiff(data.id, value);
      // console.log(diff, '=======', value, dispatchMap);
      for (const id in diff) {
        const dispatch = dispatchMap[id];
        const targetDiff = diff[id];
        if (dispatch == null) return;
        for (const k in targetDiff) {
          // console.log(k, 'kkkk');
          // @ts-ignore
          dispatch[k](targetDiff[k]);
        }
      }
      // userOnChange();
    },
    [userOnChange, data],
  );

  // 点击展开/收缩
  const onClick = useCallback(() => {
    invoke(onExpand, !userExpand);
  }, [userExpand]);

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
