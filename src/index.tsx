import { useMemo, useCallback, useRef, useState, useEffect } from 'react';
import { Spin, Empty } from 'antd';
import { PermissionTableProps, Data, Map } from './type';
import merge from 'lodash/merge';
import { each } from './utils';
import { Provider, ContextType } from './Context';
import Title, { defaultColums } from './Title';
import MenuList from './MenuList';
import styles from './style.module.less';
import TreeModel, { Diff } from './TreeModel';
import { invoke } from 'lodash';

const PermissionTable = (props: PermissionTableProps) => {
  const {
    value,
    dataSource: userDataSource,
    columns: userColumns,
    loading = false,
    defaultSelectedKeys = [],
    onChange: userOnChange,
  } = props;
  const cacheRef = useRef<TreeModel['id'][]>([]);
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
    // const defaultSelectedKeysMap: Map<true> = defaultSelectedKeys.reduce(
    //   (map, cur) => {
    //     map[cur] = true;
    //     return map;
    //   },
    //   {} as Map<true>,
    // );

    each(dupDataSource, (data, parent, level) => {
      data.childList = data.childList || [];
      data.level = level as number;
      data.parent = parent as Data;
    });
    return dupDataSource.map((o) => new TreeModel(o));
  }, [userDataSource]);

  const dispatchMap = useMemo<ContextType['dispatchMap']>(
    () => ({}),
    [dataSource],
  );

  const dispatchWithDiff = useCallback(
    (diff: Diff) => {
      for (const id in diff) {
        const dispatch = dispatchMap[id];
        const targetDiff = diff[id];
        if (dispatch == null) return;
        for (const k in targetDiff) {
          // @ts-ignore
          dispatch[k](targetDiff[k]);
        }
      }
    },
    [dispatchMap],
  );

  const selectKeys = useCallback(
    (keys: TreeModel['id'][]) => {
      if (!Array.isArray(keys)) return;
      dataSource.forEach((o) => {
        const diff = o.selectKeys(keys);
        dispatchWithDiff(diff);
      });
    },
    [dispatchWithDiff],
  );

  const onChange = useCallback(
    (keys: TreeModel['id'][]) => {
      cacheRef.current = keys;
      invoke(userOnChange, keys);
    },
    [userOnChange],
  );

  useEffect(() => {
    if (value) return;
    selectKeys(defaultSelectedKeys);
  }, [dataSource, selectKeys]);

  useEffect(() => {
    if (value == null || value === cacheRef.current) return;
    console.log('value', value);
    selectKeys(value);
  }, [dataSource, selectKeys, value]);

  return (
    <div className={styles.permissionContainer}>
      <Provider
        value={{
          columns,
          onChange,
          maxLevel,
          dataSource,
          dispatchMap,
          dispatchWithDiff,
        }}
      >
        <Spin spinning={loading}>
          <Title columns={columns} />
          {loading ? (
            <Empty description />
          ) : (
            <MenuList columns={columns} list={dataSource} />
          )}
        </Spin>
      </Provider>
    </div>
  );
};

export default PermissionTable;
