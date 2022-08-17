import { useState, useEffect, useMemo, useCallback, useContext } from 'react';
import classNames from 'classnames';
import { MenuListProps, RowProps, ExpandColDeepProps } from './type';
import { invoke } from './utils';
import Checkbox from './components/Checkbox';
import Context from './Context';
import styles from './style.module.less';

// data 不是可变数据
const ExpandColDeep = (props: ExpandColDeepProps) => {
  const {
    data,
    list,
    firstCenterCol,
    parentChecked,
    expand: parentExpand,
    setExpand: setParentExpand,
    setChecked: setParentChecked,
    setIndeterminate: setParentIndeterminate,
  } = props;
  const { maxLevel } = useContext(Context);
  const isAuth = data && data.level >= maxLevel - 1;
  const [expand, setExpand] = useState<boolean>(data?.expand ?? false);
  const [checked, _setChecked] = useState<boolean>(data?.checked ?? false);
  const [indeterminate, _setIndeterminate] = useState<boolean>(
    data?.indeterminate ?? false,
  );

  const setChecked = useCallback((value: boolean) => {
    data && (data.checked = value);
    if (value) {
      // 选中后, 就不是非半选状态了
      setIndeterminate(false);
    }
    _setChecked(value);
  }, []);

  const setIndeterminate = useCallback((value: boolean) => {
    data && (data.indeterminate = value);
    _setIndeterminate(value);
  }, []);

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
      if (data.level > 1) {
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

  useEffect(() => {
    // 如果当前处于半选状态, 则父元素也是半选状态
    if (indeterminate) {
      invoke(setParentIndeterminate, true);
    }
  }, [indeterminate]);

  useEffect(() => {
    if (
      parentChecked == null ||
      data?.parent == null ||
      data.parent.indeterminate
    ) {
      return;
    }
    // 父元素状态改变之后, 子选项全部选中
    setChecked(parentChecked);
  }, [parentChecked]);

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
              [styles.firstCenterCol]: firstCenterCol,
            },
          )}
          firstCenterCol={firstCenterCol}
          data={data}
          isLeaf={list.length <= 1}
          expand={expand}
          onExpand={setExpand}
          indeterminate={indeterminate}
          checked={checked}
          setChecked={setChecked}
          setIndeterminate={setIndeterminate}
          setParentChecked={setParentChecked}
          setParentIndeterminate={setParentIndeterminate}
        >
          {data.name}
        </Checkbox>
      )}
      {isAuth ? (
        <div className={classNames(styles.authCol, minColStyle)}>
          {list.map((o) => {
            return (
              <Checkbox
                key={o.id}
                data={o}
                isLeaf
                parentChecked={checked}
                setParentChecked={setChecked}
                setParentIndeterminate={setIndeterminate}
              >
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
                parentChecked={checked}
                setExpand={setExpand}
                setIndeterminate={setIndeterminate}
                setChecked={setChecked}
              />
            );
          })}
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
    <>
      {list.map((o) => {
        return <Row key={o.id} data={o} />;
      })}
    </>
  );
};

export { Row };

export default MenuList;