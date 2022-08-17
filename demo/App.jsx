import { useState, useEffect, useCallback } from 'react';
import { Modal, Divider } from 'antd';
import PermissionTable from '../src';
import mockData from './mock';

const defaultSelectedKeys = [
  /* 2, 3, 39, 1900, 2008, 1856 */
];

function getDoms() {
  return document.querySelectorAll('.ant-checkbox-checked').length;
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [selectKeys, setSelectKeys] = useState(defaultSelectedKeys);
  const [selectDoms, setSelectDoms] = useState(getDoms());

  const onChange = useCallback((keys) => {
    setSelectKeys(keys);
  }, []);

  useEffect(() => {
    clearTimeout(App.timer);
    App.timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(App.timer);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setSelectDoms(getDoms());
    }, 300);
  }, [selectKeys]);

  return (
    <Modal visible title="Permission-Table Demo" footer={null} width="1100px">
      <strong>SelectKeys:</strong> {selectKeys.join(', ')}
      <br />
      <strong>SelectKeysLength:</strong> {selectKeys.length}
      <br />
      <strong>Checked Doms(delay 300):</strong> {selectDoms}
      <Divider />
      <div
        style={{
          maxHeight: `60vh`,
          overflow: 'auto',
        }}
      >
        <PermissionTable
          dataSource={mockData}
          onChange={onChange}
          defaultSelectedKeys={defaultSelectedKeys}
          columns={[
            {
              title: '我修改了一级菜单',
            },
            undefined,
            undefined,
            undefined,
          ]}
          loading={loading}
        />
      </div>
    </Modal>
  );
};

export default App;
