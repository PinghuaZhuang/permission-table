import { useCallback, useRef, useEffect, ChangeEvent } from 'react';
import { Checkbox } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CaretDownOutlined, CaretRightOutlined } from '@ant-design/icons';
import { Data, BodyProps } from './type';
import styles from './style.module.less';

const { Group: CheckboxGroup } = Checkbox;

const Body = (props: BodyProps) => {
  const {
    list,
    activeKey,
    setActiveKey,
    selectBox,
    setSelectBox,
    secondKey,
    setSecondKey,
    getTreeData,
  } = props;
  const cacheRef = useRef({ activeKey, selectBox });

  // 一级菜单点击展开状态
  const handleTableRow = useCallback((index: number) => {
    setActiveKey(index === cacheRef.current.activeKey ? null : index);
    setSecondKey(null);
  }, []);

  // 一级菜单选择
  const handleFirstCheckbox = useCallback(
    (e: CheckboxChangeEvent, index: number, citem: Data) => {
      if (!citem.childList.length) return;

      setSelectBox((selectBox) => {
        let ids: number[] = [];
        if (e.target.checked) {
          ids = citem.childList.map((item) => item.id);
          citem.childList.forEach((child, i) => {
            if (child.childList && child.childList.length) {
              selectBox[`f${index}c${i}`] = child.childList.map(
                (item) => item.id,
              );
            }
          });
        } else {
          citem.childList.forEach((child, i) => {
            if (child.childList && child.childList.length) {
              selectBox[`f${index}c${i}`] = [];
            }
          });
        }

        selectBox[`f${index}`] = ids;

        // TODO: time: new Date().getTime()
        getTreeData();

        return selectBox;
      });
    },
    [],
  );

  // 展示部分选中一级菜单状态
  const setIndeterminate = useCallback(
    (name: string, checked: boolean) => {
      let status = false;
      if (!checked) {
        Object.keys(selectBox).forEach((citem) => {
          if (citem.length === 4) {
            if (
              selectBox[`${citem}`] &&
              selectBox[`${citem}`].length &&
              citem.indexOf(name) > -1
            ) {
              status = true;
            }
          }
        });
      }
      return status;
    },
    [selectBox],
  );

  // 二级菜单选择
  const handleSecondCheckBox = useCallback(
    (e: CheckboxChangeEvent, index: number, cindex: number, citem: Data) => {
      setSelectBox((selectBox) => {
        let ids: number[] = [];
        if (e.target.checked) {
          ids = citem.childList.map((item) => item.id);
        }
        selectBox[`f${index}`] = ids;

        // TODO: time: new Date().getTime()
        return selectBox;
      });
    },
    [],
  );

  // 三级菜单选择
  const handleThreeCheckBox = useCallback(
    (e: CheckboxChangeEvent, index: number, cindex: number, citem: Data) => {
      setSelectBox((selectBox) => {
        if (typeof cindex === 'number') {
          selectBox[`f${index}c${cindex}`] = e;
          if (
            citem.childList.length === selectBox[`f${index}c${cindex}`].length
          ) {
            if (selectBox[`f${index}`] && selectBox[`f${index}`].length) {
              selectBox[`f${index}`] = [...selectBox[`f${index}`], citem.id];
            } else {
              selectBox[`f${index}`] = [citem.id];
            }
            selectBox[`f${index}`] = Array.from(
              new Set(selectBox[`f${index}`]),
            );
          } else if (selectBox[`f${index}`] && selectBox[`f${index}`].length) {
            const i = selectBox[`f${index}`].indexOf(citem.id);
            if (i > -1) {
              selectBox[`f${index}`].splice(i, 1);
            }
          }
        } else {
          selectBox[`f${index}`] = e;
        }
      });
      getTreeData();
      return selectBox;
    },
    [],
  );

  useEffect(() => {
    cacheRef.current.activeKey = activeKey;
  }, [activeKey]);

  useEffect(() => {
    cacheRef.current.selectBox = selectBox;
  }, [selectBox]);

  return (
    <div className={styles.tableBodyBox}>
      {list &&
        list.length > 0 &&
        list.map((item, index) => {
          return (
            <div className={styles.tableItemBox} key={item.id}>
              <div
                className={styles.tableItem}
                style={{
                  width: 180,
                  justifyContent: index === 0 ? 'center' : '',
                  paddingRight: index === 0 ? '10px' : '',
                }}
                onClick={() => {
                  handleTableRow(index);
                }}
              >
                {index > 0 &&
                  (activeKey === index ? (
                    <CaretDownOutlined />
                  ) : (
                    <CaretRightOutlined />
                  ))}
                <Checkbox
                  onChange={(e) => {
                    handleFirstCheckbox(e, index, item);
                  }}
                  checked={
                    selectBox[`f${index}`] &&
                    selectBox[`f${index}`].length &&
                    selectBox[`f${index}`].length === item.childList.length
                  }
                  indeterminate={
                    (selectBox[`f${index}`] &&
                      selectBox[`f${index}`].length &&
                      selectBox[`f${index}`].length !==
                        item.childList.length) ||
                    setIndeterminate(
                      `f${index}`,
                      selectBox[`f${index}`] &&
                        selectBox[`f${index}`].length &&
                        selectBox[`f${index}`].length === item.childList.length,
                    )
                  }
                >
                  {item.name}
                </Checkbox>
              </div>
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    width: '100%',
                    overflow: 'hidden',
                    maxHeight:
                      activeKey === index
                        ? typeof secondKey === 'number'
                          ? 2000
                          : item.childList.length * 41
                        : 40,
                    transition: 'all 0.6s',
                  }}
                >
                  <CheckboxGroup
                    value={selectBox[`f${index}`]}
                    onChange={(e) => this.handleThreeCheckBox(e, index)}
                    style={{ width: '100%' }}
                  >
                    {item.childList.map((citem, cindex) => {
                      return (
                        <div
                          className={styles.checkBox}
                          style={{ display: 'flex' }}
                          key={citem.id}
                        >
                          <div
                            className={styles.tableItem}
                            style={{ width: 230 }}
                            onClick={() => {
                              this.handleSecondRow(cindex, index);
                            }}
                          >
                            {citem.childList && citem.childList.length > 3 ? (
                              activeKey === index && secondKey === cindex ? (
                                <CaretDownOutlined />
                              ) : (
                                <CaretRightOutlined />
                              )
                            ) : (
                              <div style={{ padding: '0 10px 0 30px' }} />
                            )}
                            <Checkbox
                              value={citem.id}
                              indeterminate={
                                selectBox[`f${index}c${cindex}`] &&
                                selectBox[`f${index}c${cindex}`].length &&
                                selectBox[`f${index}c${cindex}`].length !==
                                  citem.childList.length
                              }
                              onChange={(e) => {
                                handleSecondCheckBox(e, index, cindex, citem);
                              }}
                            >
                              {citem.name}
                            </Checkbox>
                          </div>
                          <div className={styles.tableItem} style={{ flex: 1 }}>
                            <div
                              className={styles.checkBox}
                              style={{
                                overflow: 'hidden',
                                maxHeight:
                                  activeKey === index && secondKey === cindex
                                    ? Math.ceil(citem.childList.length / 3) *
                                        40 +
                                      list.length * 40
                                    : 40,
                                transition: 'all 0.6s',
                              }}
                            >
                              {citem.childList && citem.childList.length ? (
                                <CheckboxGroup
                                  style={{ display: 'flex', flexWrap: 'wrap' }}
                                  value={selectBox[`f${index}c${cindex}`]}
                                  onChange={(e) =>
                                    this.handleThreeCheckBox(
                                      e,
                                      index,
                                      cindex,
                                      citem,
                                    )
                                  }
                                >
                                  {citem.childList.map((i) => {
                                    return (
                                      <Checkbox
                                        style={{
                                          lineHeight: '40px',
                                          marginLeft: 16,
                                        }}
                                        key={i.id}
                                        value={i.id}
                                        defaultChecked={i.isChoice}
                                      >
                                        {i.name}
                                      </Checkbox>
                                    );
                                  })}
                                </CheckboxGroup>
                              ) : (
                                <div
                                  style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    lineHeight: '40px',
                                    marginLeft: 16,
                                  }}
                                >
                                  --
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </CheckboxGroup>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Body;
