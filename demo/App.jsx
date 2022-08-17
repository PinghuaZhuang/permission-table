import { useState, useEffect } from 'react';
import { Modal, Divider, Space } from 'antd';
import PermissionTable from '../src';
import mockData from './mock';

const defaultSelectedKeys = [
  /* 2, 3, 39, 1900, 2008, 1856 */
];

const App = () => {
  const [loading, setLoading] = useState(true);
  const [selectKeys, setSelectKeys] = useState(defaultSelectedKeys);

  useEffect(() => {
    clearTimeout(App.timer);
    App.timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(App.timer);
    };
  }, []);

  return (
    <Modal visible title="Permission-Table Demo" footer={null} width="1100px">
      <strong>SelectKeys:</strong> {selectKeys.join(', ')}
      <br />
      <strong>SelectKeysLength:</strong> {selectKeys.length}
      <Divider />
      <div
        style={{
          maxHeight: `60vh`,
          overflow: 'auto',
        }}
      >
        <PermissionTable
          dataSource={mockData}
          onChange={setSelectKeys}
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
