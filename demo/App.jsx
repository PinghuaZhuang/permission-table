import { useState, useEffect, useCallback } from 'react';
import { Modal, Divider, InputNumber, Input } from 'antd';
import PermissionTable from '../src';
import createMock from './mock';
import { merge } from 'lodash';
import random from 'lodash/random';

const defaultSelectedKeys = new Array(4);

function getDoms() {
  return document.querySelectorAll('.ant-checkbox-checked').length;
}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [selectKeys, setSelectKeys] = useState([]);
  const [selectDoms, setSelectDoms] = useState(getDoms());
  const [columnsLength, setColumnsLength] = useState(
    defaultSelectedKeys.length,
  );
  const [dataSource, setDataSource] = useState(createMock(columnsLength));

  const onChange = useCallback((keys) => {
    setSelectKeys(keys);
  }, []);

  const onColumnLengthChange = useCallback((len) => {
    setColumnsLength(len);
    setDataSource(createMock(len, len > 4 ? 10 : undefined));
  }, []);

  const onValueChange = useCallback((e) => {
    const value = e.target.value
      .split(/,\s*/)
      .map((o) => Number.parseFloat(o))
      .filter((o) => !Number.isNaN(o));
    setSelectKeys(value);
  }, []);

  useEffect(() => {
    clearTimeout(App.timer);
    App.timer = setTimeout(() => {
      setLoading(false);
    }, random(300, 800));

    return () => {
      clearTimeout(App.timer);
    };
  }, []);

  useEffect(() => {
    clearTimeout(onChange.timer);
    onChange.timer = setTimeout(() => {
      setSelectDoms(getDoms());
    }, 300);
  }, [selectKeys]);

  useEffect(() => {
    console.log('dataSource', dataSource);
  }, [dataSource]);

  return (
    <Modal visible title="Permission-Table Demo" footer={null} width="1100px">
      <strong>Coloumns Length:</strong>{' '}
      <InputNumber
        value={columnsLength}
        min={2}
        max={10}
        onChange={onColumnLengthChange}
      />
      <br />
      <strong>Change Value(example: 10,4,5):</strong>{' '}
      <Input.TextArea onChange={onValueChange} />
      <br />
      <strong>Select Keys:</strong> {selectKeys.join(', ')}
      <br />
      <strong>SelectKeys Length:</strong> {selectKeys.length}
      <br />
      <strong>Checked Doms(delay 300):</strong> {selectDoms}
      <Divider />
      <div
        style={{
          // maxHeight: `60vh`,
          overflow: 'auto',
        }}
      >
        <PermissionTable
          value={selectKeys}
          dataSource={dataSource}
          onChange={onChange}
          defaultSelectedKeys={[4]}
          columns={merge([], new Array(columnsLength), [
            {
              title: '我修改了一级菜单',
            },
          ])}
          loading={loading}
        />
      </div>
    </Modal>
  );
};

export default App;
