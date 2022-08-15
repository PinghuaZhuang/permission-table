import React, { useState } from 'react';
import { TreeWrapType, TreeWrapProps } from '../type';
import styles from '../style.module.less';

export const TreeWrapContext = React.createContext<TreeWrapType>({});

const TreeWrap = (props: TreeWrapProps) => {
  const { children } = props;
  const [shrink, setShrink] = useState(true);

  return (
    <TreeWrapContext.Provider value={{ setShrink }}>
      <div
        className={styles.treeWrap}
        style={{
          height: shrink ? styles.rowHeight : 'auto',
        }}
      >
        {children}
      </div>
    </TreeWrapContext.Provider>
  );
};

export default TreeWrap;
