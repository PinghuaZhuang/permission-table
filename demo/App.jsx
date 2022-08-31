import { useState, useEffect, useCallback } from 'react';
import { Table } from 'antd';
import PermissionTable from '../src';
import createMock from './mock';
import { merge } from 'lodash';
import random from 'lodash/random';
import useTableScroll from './useTable';

const defaultSelectedKeys = new Array(4);

function getDoms() {
  return document.querySelectorAll('.ant-checkbox-checked').length;
}

const App = () => {
  const scroll = useTableScroll('xxxx', 0, true);
  console.log(scroll, 'scroll');

  return (
    <div className="xxxx">
      <Table
        scroll={scroll}
        pagination={false}
        rowKey="id"
        dataSource={Array.from({ length: 10 }).map((o, index) => {
          return {
            name: 'nananana',
            age: 'agagaegeg',
            age1: 'agesdfasfasf',
            age2: 'agesdfasfasf',
            age3: 'agesdfasfasf',
            age4: 'agesdfasfasf',
            id: index,
          };
        })}
        columns={[
          {
            title: 1111,
            dataIndex: 'name',
          },
          {
            title: 1111,
            dataIndex: 'name',
          },
          {
            title: 1111,
            dataIndex: 'name',
          },
          {
            title: 1111,
            dataIndex: 'name',
          },
          {
            title: 1111,
            dataIndex: 'name',
          },
          {
            title: 1111,
            dataIndex: 'name',
          },
        ]}
      />
    </div>
  );
};

export default App;
