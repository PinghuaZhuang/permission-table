import { useState, useEffect, useMemo, useCallback, useContext } from 'react';
import classNames from 'classnames';
import { MenuListProps, RowProps, ExpandColDeepProps } from './type';
import { invoke, each } from './utils';
import Checkbox from './components/Checkbox';
import Context from './Context';
import styles from './style.module.less';

// data 不是可变数据
const ExpandColDeep = (props: ExpandColDeepProps) => {
  const {
    data,
    list,
    firstCenterCol,
    expand: parentExpand,
    setExpand: setParentExpand,
  } = props;
  const { maxLevel } = useContext(Context);
  const isAuth = data && data.level >= maxLevel - 1;
  const [expand, setExpand] = useState<boolean>(data?.options.expand ?? false);

  const minColStyle = useMemo(
    () => ({
      [styles.minCol]: data && !expand,
    }),
    [expand],
  );

  useEffect(() => {
    if (data == null || parentExpand == null) return;
    // 父元素关闭, 子元素递归关闭
    if (parentExpand === false) {
      setExpand(false);
    } else {
      if (data.level > 1 && data.level < 3) {
        // 二级菜单开始, 递归子元素展开
        setExpand(true);
      }
    }
  }, [parentExpand]);

  useEffect(() => {
    if (expand) {
      // 子元素展开, 父元素递归展开
      invoke(setParentExpand, true);
    } else {
      if (data && data.level > 1 && firstCenterCol) {
        // 三级菜单开始, 关闭则父元素跟着关闭
        invoke(setParentExpand, false);
      }
    }
  }, [expand, firstCenterCol]);

  return (
    <div
      key={data?.id}
      className={classNames(styles.borderTop, data?.className, minColStyle)}
    >
      {data && (
        <Checkbox
          className={classNames(
            data.level === 0 ? styles.firstCol : styles.centerCol,
            {
              firstCenterCol,
            },
          )}
          firstCenterCol={firstCenterCol}
          data={data}
          isLeaf={list.length <= 1}
          expand={expand}
          onExpand={setExpand}
        >
          {data.name}
        </Checkbox>
      )}
      {isAuth ? (
        <div className={classNames(styles.authCol, minColStyle)}>
          {list.map((o) => {
            return (
              <Checkbox key={o.id} data={o} isLeaf>
                {o.name}
              </Checkbox>
            );
          })}
        </div>
      ) : (
        <div className={classNames(styles.lastCol)}>
          {list.map((o, index) => {
            return (
              <ExpandColDeep
                key={o.id}
                data={o}
                list={o.childList}
                firstCenterCol={index === 0}
                expand={expand}
                setExpand={setExpand}
              />
            );
          })}
          {/* 空白单元格 */}
          {data && list.length === 0 && (
            <div className={classNames(styles.borderTop)}>
              {Array.from({ length: maxLevel - data.level }).map((_, index) => {
                return (
                  <div
                    key={index}
                    className={classNames(
                      index === maxLevel - data.level - 1
                        ? styles.authCol
                        : styles.centerCol,
                    )}
                  />
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Row = (props: RowProps) => {
  const { data } = props;

  return (
    <div className={styles.row}>
      <ExpandColDeep data={null} list={[data]} />
    </div>
  );
};

const MenuList = (props: MenuListProps) => {
  const { list = [], columns } = props;

  return (
    <div className={classNames('tableBody', styles.tableBody)}>
      {list.map((o) => {
        return <Row key={o.id} data={o} />;
      })}
    </div>
  );
};

export { Row };

export default MenuList;
