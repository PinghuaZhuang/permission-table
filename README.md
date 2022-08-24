# Permission-Table

[![publish](https://github.com/PinghuaZhuang/permission-table/actions/workflows/publish.yml/badge.svg)](https://github.com/PinghuaZhuang/permission-table/actions/workflows/publish.yml) [![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/PinghuaZhuang/permission-table/blob/master/LICENSE) [![Commit](https://img.shields.io/github/last-commit/pinghuazhuang/permission-table.svg)](https://github.com/PinghuaZhuang/permission-table/commits/master) [![Verison](https://img.shields.io/npm/v/@zstark/permission-table.svg)](https://www.npmjs.com/package/@zstark/permission-table)

权限选择. 表格形式.

## Example

[Live Demo](https://pinghuazhuang.github.io/@zstark/permission-table/)

## 🚀 Quick Start

```jsx
import { useMemo } from 'react';
import PermissionTable from '@zstark/permission-table';

const App = () => {
  const dataSource = useMemo(
    () => ({
      id: 0,
      name: 'title1',
      childList: [
        { id: 1, name: 'title2' },
        { id: 2, name: 'title3' },
      ],
    }),
    [],
  );

  return <PermissionTable dataSource={dataSource} onChange={console.log} />;
};
```

## Props

- loading: boolean; loading 动效.
- value: Id[]; 一般用户 form 表单. 或者初始化选中.
- columns: { title: string }[]; 表头.
- onChange: (ids: Id[]) => void;
