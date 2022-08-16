import classNames from 'classnames';
import styles from './style.module.less';

const PermissionTableTitle = () => {
  return (
    <div className={styles.tableHeaderbox}>
      <div className={styles.tableItem}>模块</div>
      <div className={styles.tableItem}>菜单权限1</div>
      <div className={styles.tableItem}>菜单权限2</div>
      <div className={classNames(styles.tableItem, styles.flexAuto)}>
        具体权限
      </div>
    </div>
  );
};

export default PermissionTableTitle;
