import classNames from 'classnames';
import { PermissionTableTitleProps } from './type';
import styles from './style.module.less';

export const defaultColums = [
  {
    title: '一级菜单',
  },
  {
    title: '二级菜单',
  },
  {
    title: '模块权限',
  },
  {
    title: '具体权限',
  },
];

const PermissionTableTitle = (props: PermissionTableTitleProps) => {
  const { columns } = props;

  return (
    <div className={styles.tableHeaderbox}>
      {columns.map((o, index) => {
        return (
          <div
            key={index}
            className={classNames(styles.tableItem, {
              [styles.flexAuto]: index === columns.length - 1,
            })}
          >
            {o.title}
          </div>
        );
      })}
    </div>
  );
};

export default PermissionTableTitle;
