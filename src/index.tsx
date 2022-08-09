import { useMemo } from 'react';
import { Form, Checkbox, Spin, Table } from 'antd';
import { PermissionTableProps } from './type';
import merge from 'lodash/merge';
import { each } from '@/utils';
import Title from './Title';
import createColumns from './columns';
import styles from './style.module.less';

const PermissionTable = (props: PermissionTableProps) => {
  const { dataSource: userDataSource, columns: userColumns, loading } = props;

  const dataSource = useMemo(() => {
    const dupDataSource = [...userDataSource];
    each(dupDataSource, (data, parent, level) => {
      data.childList = data.childList || [];
      console.log(data);
    });
    console.log('dupDataSource', dupDataSource);
    return dupDataSource;
  }, [userDataSource]);

  return (
    <div className={styles.permissionContainer}>
      <>
        <Title />
      </>
    </div>
  );
};

export default PermissionTable;
