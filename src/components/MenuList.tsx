import { useState, useEffect, useMemo, useCallback } from 'react';
import Checkbox from './Checkbox';
import styles from '../style.module.less';
import classNames from 'classnames';

const ExpandColDeep = (props) => {
  const {
    data,
    list,
    firstCenterCol,
    expand: userExpand,
    setExpand: setParentExpand,
  } = props;
  const isAuth = data && data.level >= 3 - 1;
  const [expand, setExpand] = useState<boolean>(false);
  const minColStyle = useMemo(
    () => ({
      [styles.minCol]: data && !expand,
    }),
    [expand, data],
  );

  useEffect(() => {
    if (data == null) return;
    // 父元素关闭, 子元素递归关闭
    if (userExpand === false) {
      setExpand(false);
    }
  }, [userExpand, data]);

  useEffect(() => {
    if (expand) {
      // 子元素展开, 父元素递归展开
      setParentExpand && setParentExpand(true);
    }
  }, [expand]);

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
            return <Checkbox key={o.id}>{o.name}</Checkbox>;
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
        </div>
      )}
    </div>
  );
};

const Row = (props) => {
  const { data } = props;

  return (
    <div className={styles.row}>
      <ExpandColDeep data={null} list={[data]} />
    </div>
  );
};

const MenuList = (props) => {
  const { list = [] } = props;

  return list.map((o) => {
    return <Row key={o.id} data={o} />;
  });
};

export { Row };

export default MenuList;
