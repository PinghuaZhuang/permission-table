import { useMemo, useCallback } from 'react';
import { Spin, Empty } from 'antd';
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
    loading = false,
    defaultSelectedKeys = [],
    onChange: userOnChange,
  } = props;

  const columns = useMemo(() => {
    const defaultColumsDup = merge([], defaultColums);
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
      // 父元素选中, 子元素全部选中
      // 转换错误的 selectKeys
      data.checked = parent?.checked || defaultSelectedKeysMap[data.id];
    });
    return dupDataSource;
  }, [userDataSource]);

  const onChange = useCallback(() => {
    if (userOnChange == null) return;
    // @ts-ignore
    clearTimeout(onChange.timer);
    // 触发父元素全选是有延迟的.
    // @ts-ignore
    onChange.timer = setTimeout(() => {
      const selectedKeys: PermissionTableProps['defaultSelectedKeys'] = [];
      each(dataSource, (data) => {
        if (data.checked) {
          // @ts-ignore
          selectedKeys.push(data.id);
        }
      });
      userOnChange(selectedKeys);
    }, 1);
  }, [userOnChange, dataSource]);

  return (
    <div className={styles.permissionContainer}>
      <Provider value={{ columns, onChange, maxLevel, dataSource }}>
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
