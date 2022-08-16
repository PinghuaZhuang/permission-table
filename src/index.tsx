import { useMemo, useState, useCallback } from 'react';
// import { Form, Checkbox, Spin, Table } from 'antd';
import { PermissionTableProps, Data } from './type';
import merge from 'lodash/merge';
import { each } from './utils';
import { Provider } from './Context';
import Title, { defaultColums } from './Title';
import MenuList from './MenuList';
import styles from './style.module.less';

const PermissionTable = (props: PermissionTableProps) => {
  const {
    dataSource: userDataSource,
    columns: userColumns,
    loading,
    defaultSelectedKeys = [],
    onChange: userOnChange,
  } = props;

  const columns = useMemo(
    () => merge([], defaultColums, userColumns),
    [userColumns],
  );

  const maxLevel = useMemo(() => columns.length, [columns]);

  // 添加 level 和 parent
  const dataSource = useMemo(() => {
    const dupDataSource = merge([], userDataSource);
    // @ts-ignore
    const defaultSelectedKeysMap = defaultSelectedKeys.reduce((map, cur) => {
      map[cur] = true;
      return map;
    }, {});
    console.log(defaultSelectedKeysMap, 'defaultSelectedKeysMap');
    each(dupDataSource, (data, parent, level) => {
      data.childList = data.childList || [];
      data.level = level as number;
      data.parent = parent as Data;
      data.checked = defaultSelectedKeysMap[data.id];
      // if (level === 0) {
      //   // 一级菜单, 如果子元素超过一个, 则显示三角符号
      //   data.isLeaf = data.childList.length <= 1;
      // } else if (data.childList.length > 0) {
      //   // 非首尾, 根据同级元素判断
      //   const siblings = parent.childList;
      //   data.isLeaf = siblings.length <= 1;
      // }
    });
    console.log('dupDataSource', dupDataSource);
    return dupDataSource;
  }, [userDataSource]);

  const onChange = useCallback(() => {
    if (userOnChange == null) return;
    const selectedKeys: PermissionTableProps['defaultSelectedKeys'] = [];
    each(dataSource, (data) => {
      if (data.checked) {
        // @ts-ignore
        selectedKeys.push(data.id);
      }
    });
    userOnChange(selectedKeys);
  }, [userOnChange, dataSource]);

  return (
    <div className={styles.permissionContainer}>
      <Provider value={{ columns, onChange, maxLevel, dataSource }}>
        <Title columns={columns} />
        <MenuList columns={columns} list={dataSource} onChange={onChange} />
      </Provider>
    </div>
  );
};

export default PermissionTable;
