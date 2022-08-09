import styles from './style.module.less';

const PermissionTableTitle = () => {
  return (
    <div className={styles.tableHeaderbox}>
      <div className={styles.tableItem} style={{ width: 180 }}>
        模块
      </div>
      <div className={styles.tableItem} style={{ width: 230 }}>
        菜单权限
      </div>
      <div className={styles.tableItem} style={{ flex: 1 }}>
        具体权限
      </div>
    </div>
  );
};

export default PermissionTableTitle;
