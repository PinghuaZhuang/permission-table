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
        defaultSelectedKeys={[1900, 2008, 1856]}
      />
    </Modal>
  );
};

export default App;
