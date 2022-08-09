import { Modal } from 'antd';
import PermissionTable from '../src';
import mockData from './mock';

const App = () => {
  return (
    <Modal visible title="Permission-Table Demo" footer={null} width="1000px">
      <div>
        demo
        <PermissionTable dataSource={mockData} />
      </div>
    </Modal>
  );
};

export default App;
