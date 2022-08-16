import Checkbox from './Checkbox';
import styles from '../style.module.less';
import classNames from 'classnames';

function eachChildList(childList) {
  return childList.map((o) => {
    const isAuth = o.level >= 3 - 1;
    return (
      <div key={o.id} className={styles.borderTop}>
        <Checkbox className={styles.centerCol}>{o.name}</Checkbox>
        {isAuth ? (
          <div className={styles.authCol}>
            {o.childList.map((o) => {
              return <Checkbox key={o.id}>{o.name}</Checkbox>;
            })}
          </div>
        ) : (
          <div className={styles.lastCol}>{eachChildList(o.childList)}</div>
        )}
      </div>
    );
  });
}

const Row = (props) => {
  const { data } = props;

  return (
    <div className={styles.row}>
      <div className={styles.firstCol}>
        <Checkbox>{data.name}</Checkbox>
      </div>
      <div className={styles.lastCol}>
        {/* <div className={styles.borderTop}>
          <Checkbox className={styles.centerCol}>222</Checkbox>
          <div className={styles.lastCol}>
            <div className={styles.borderTop}>
              <Checkbox className={styles.centerCol}>1111</Checkbox>
            </div>
            <div className={styles.borderTop}>
              <Checkbox className={styles.centerCol}>1111</Checkbox>
              <div className={styles.authCol}>
                <Checkbox>1111</Checkbox>
                <Checkbox>1111</Checkbox>
                <Checkbox>1111</Checkbox>
                <Checkbox>1111</Checkbox>
                <Checkbox>1111</Checkbox>
                <Checkbox>1111</Checkbox>
                <Checkbox>1111</Checkbox>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.borderTop}>
          <Checkbox>2222</Checkbox>
        </div> */}
        {eachChildList(data.childList)}
      </div>
      {/* <div className={styles.authCol}>
        <Checkbox>1111</Checkbox>
        <Checkbox>1111</Checkbox>
        <Checkbox>1111</Checkbox>
        <Checkbox>1111</Checkbox>
      </div> */}
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
