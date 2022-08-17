import { useState, useEffect } from 'react';
import { Modal } from 'antd';
import PermissionTable from '../src';
import mockData from './mock';

const App = () => {
  const [loading, setLoading] = useState(true);

  const onChange = (selectKeys) => {
    console.log(selectKeys, 'selectKeys');
  };

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
      <PermissionTable
        dataSource={mockData}
        onChange={onChange}
        defaultSelectedKeys={[2, 3, 39, 1900, 2008, 1856]}
        // defaultSelectedKeys={[2]}
        columns={[
          {
            title: '1111',
          },
          undefined,
          undefined,
          undefined,
        ]}
        loading={loading}
      />
    </Modal>
  );
};

export default App;
