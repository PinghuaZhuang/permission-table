import { useState, useEffect, useCallback } from 'react';
import { Checkbox } from 'antd';
import { CheckboxProps } from 'antd/es/checkbox';
import { CaretRightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './checkbox.module.less';

const EasyCheckbox = (
  props: CheckboxProps & {
    expand?: boolean;
    onExpand?: (expand: boolean) => void;
    /**
     * 设置为叶子节点. 为 false 时会强制将其作为父节点
     */
    isLeaf?: boolean;
  },
) => {
  const { expand: userExpand, className, onExpand, isLeaf } = props;
  const [expand, setExpand] = useState(userExpand ?? false);

  const onClick = useCallback(() => {
    setExpand(!expand);
    onExpand && onExpand(!expand);
  }, [expand, userExpand]);

  useEffect(() => {
    if (userExpand == null) return;
    setExpand(userExpand);
  }, [userExpand]);

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
      />
    </div>
  );
};

export default EasyCheckbox;
