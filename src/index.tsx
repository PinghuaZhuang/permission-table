import { useMemo, useCallback, useRef, useState } from 'react';
import { Spin, Empty } from 'antd';
import { PermissionTableProps, Data } from './type';
import merge from 'lodash/merge';
import { each } from './utils';
import { Provider } from './Context';
import Title, { defaultColums } from './Title';
import MenuList from './MenuList';
import styles from './style.module.less';
import TreeModel from './TreeModel';

let uid = 0;

const PermissionTable = (props: PermissionTableProps) => {
  const {
    value,
    dataSource: userDataSource,
    columns: userColumns,
    loading = false,
    defaultSelectedKeys = [],
    onChange: userOnChange,
  } = props;

  const columns = useMemo(() => {
    const defaultColumsDup = merge(
      // @ts-ignore
      Array.from({ length: userColumns?.length }).map(() => ({
        title: 'default title',
      })),
      defaultColums,
    );
    const colsTmp = userColumns
      ? defaultColumsDup.slice(0, userColumns.length)
      : defaultColumsDup;
    return merge([], colsTmp, userColumns);
  }, [userColumns]);

  const maxLevel = useMemo(() => columns.length - 1, [columns]);

  // 添加 level 和 parent
  const dataSource = useMemo(() => {
    const dupDataSource = merge([], userDataSource);
    // @ts-ignore
    const defaultSelectedKeysMap = defaultSelectedKeys.reduce((map, cur) => {
      map[cur] = true;
      return map;
    }, {});

    each(dupDataSource, (data, parent, level) => {
      data.childList = data.childList || [];
      data.level = level as number;
      data.parent = parent as Data;
      data.defaultChecked =
        parent?.defaultChecked || defaultSelectedKeysMap[data.id];
    });
    // console.log('dupDataSource', merge([], dupDataSource), defaultSelectedKeysMap);
    return dupDataSource.map((o) => new TreeModel(o));
  }, [userDataSource]);

  const dispatchMap = useMemo(() => ({}), []);

  const onChange = useCallback(() => {
    if (userOnChange == null) return;
    // 通过 diff 来改变
    // userOnChange();
  }, [userOnChange, dataSource]);

  return (
    <div className={styles.permissionContainer}>
      <Provider
        value={{ columns, onChange, maxLevel, dataSource, dispatchMap }}
      >
        <Spin spinning={loading}>
          <Title columns={columns} />
          {loading ? (
            <Empty description />
          ) : (
            <MenuList columns={columns} list={dataSource} onChange={onChange} />
          )}
        </Spin>
      </Provider>
    </div>
  );
};

export default PermissionTable;
