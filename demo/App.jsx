import { Modal } from 'antd';
import PermissionTable from '../src';
import mockData from './mock';

const App = () => {
  const onChange = (selectKeys) => {
    console.log(selectKeys, 'selectKeys');
  };

  return (
    <Modal visible title="Permission-Table Demo" footer={null} width="1100px">
      <PermissionTable
        dataSource={mockData}
        onChange={onChange}
        // defaultSelectedKeys={[2, 3, 39, 1900, 2008, 1856]}
        defaultSelectedKeys={[2]}
        // columns={[
        //   {
        //     title: '1111'
        //   },
        //   undefined,
        // ]}
      />
    </Modal>
  );
};

export default App;
