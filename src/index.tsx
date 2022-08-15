import { useMemo, useCallback } from 'react';
import { Form, Checkbox, Spin, Table } from 'antd';
import { PermissionTableProps, DataNode } from './type';
import merge from 'lodash/merge';
import { each } from '@/utils';
import createColumns from './columns';
import styles from './style.module.less';

const PermissionTable = (props: PermissionTableProps) => {
  const {
    dataSource: userDataSource,
    columns: userColumns,
    loading,
    tableProps = {},
  } = props;

  const columns = useMemo(
    () => merge(createColumns(), userColumns),
    [userColumns],
  );

  const dataSource = useMemo(() => {
    const dupDataSource = [...userDataSource];
    each(dupDataSource, (data, parent, level) => {
      data.childList = data.childList || [];
      data.level = level;
      data.parent = parent;
      if (level === 0) {
        // 一级菜单, 如果子元素超过一个, 则显示三角符号
        data.isLeaf = data.childList.length <= 1;
      } else if (data.childList.length > 0) {
        // 非首尾, 根据同级元素判断
        const siblings = parent.childList;
        data.isLeaf = siblings.length <= 1;
      }
    });
    console.log('dupDataSource', dupDataSource);
    return dupDataSource;
  }, [userDataSource]);

  return (
    <div className={styles.permissionContainer}>
      <>
        <Table
          rowKey="id"
          {...tableProps}
          columns={columns}
          dataSource={dataSource}
        />
      </>
    </div>
  );
};

export default PermissionTable;
