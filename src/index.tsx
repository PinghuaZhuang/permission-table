import { useMemo, useCallback, useRef, useEffect, useState } from 'react';
import { Spin, Empty } from 'antd';
import { PermissionTableProps, Data } from './type';
import merge from 'lodash/merge';
import { each, invoke } from './utils';
import { Provider, ContextType } from './Context';
import Title, { defaultColums } from './Title';
import MenuList from './MenuList';
import styles from './style.module.less';
import TreeModel, { Diff } from './TreeModel';

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
  const coantainerRef = useRef<HTMLDivElement>(null);
  const [authWidth, setAuthWidth] = useState<number>(0);
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
    [dataSource, dispatchWithDiff],
  );

  const onChange = useCallback(() => {
    const keys: TreeModel['id'][] = [];
    dataSource.forEach((o) => {
      keys.push(...o.getSelectKeys());
    });
    cacheRef.current = keys;
    invoke(userOnChange, keys);
  }, [userOnChange, dataSource]);

  useEffect(() => {
    if (value) return;
    selectKeys(defaultSelectedKeys);
  }, [dataSource, selectKeys]);

  useEffect(() => {
    if (value == null || value === cacheRef.current) return;
    selectKeys(value);
  }, [dataSource, selectKeys, value]);

  useEffect(() => {
    const authColTitle = coantainerRef.current?.querySelector(
      `.${styles.tableItem}:last-child`,
    );
    if (authColTitle) {
      setAuthWidth(authColTitle?.getBoundingClientRect().width);
    }
  }, [dataSource]);

  return (
    <div ref={coantainerRef} className={styles.permissionContainer}>
      <Provider
        value={{
          columns,
          onChange,
          maxLevel,
          dataSource,
          dispatchMap,
          dispatchWithDiff,
          authWidth,
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
