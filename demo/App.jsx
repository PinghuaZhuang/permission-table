import { Modal } from 'antd';
import PermissionTable from '../src';
import mockData from './mock';

const App = () => {
  return (
    <Modal visible title="Permission-Table Demo" footer={null} width="1100px">
      <PermissionTable dataSource={mockData} />
    </Modal>
  );
};

export default App;
