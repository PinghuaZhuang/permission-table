import { useState } from 'react';
import { Checkbox } from 'antd';
import { CheckboxProps } from 'antd/es/checkbox';
import { CaretRightOutlined } from '@ant-design/icons';
import classNames from 'classnames';
import styles from './checkbox.module.less';

const EasyCheckbox = (
  props: CheckboxProps & {
    expand?: boolean;
  },
) => {
  const { expand: userExpand, className } = props;
  const [expand, setExpand] = useState(false);

  return (
    <div className={classNames(styles.checkboxContainer, className)}>
      <CaretRightOutlined
        className={classNames(
          {
            [styles.rotate90]: userExpand ?? expand,
          },
          styles.icon,
        )}
      />
      <Checkbox {...props} className={classNames(styles.checkbox)} />
    </div>
  );
};

export default EasyCheckbox;
