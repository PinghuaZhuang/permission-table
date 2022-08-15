import { useContext, useCallback } from 'react';
import { Tree } from 'antd';
import { Data, CenterNodeListProps } from './type';
import { TreeProps, EventDataNode } from 'antd/es/tree';
import TreeWrap, { TreeWrapContext } from './components/TreeWrap';

function isCenterNode(node: Data) {
  return node.childList.length > 0 && node.level > 0;
}

const CenterNodeList = (props: CenterNodeListProps) => {
  const { setShrink } = useContext(TreeWrapContext);
  const { record } = props;

  const onCenterExpand = useCallback<Required<TreeProps>['onExpand']>(
    (expandedKeys, { expanded, node }) => {
      // @ts-ignore
      const tempNode: Data = node;
      if (isCenterNode(tempNode)) {
        if (tempNode.parent.childList[0]?.id === tempNode.id) {
          // 第一个, 展开全部
          setShrink && setShrink(!expanded);
        } else {
          // 非第一个, 展开后面一列的元素
        }
      }
    },
    [setShrink],
  );

  return (
    <Tree
      key={record.id}
      checkable
      treeData={record.childList}
      fieldNames={{
        title: 'name',
        // children: 'childList',
        key: 'id',
      }}
      onExpand={onCenterExpand}
    />
  );
};

export default function createColumns() {
  return [
    {
      title: '模块',
      render(text, record) {
        return (
          <Tree
            key={record.id}
            checkable
            treeData={[
              {
                ...record,
                childList: [],
              },
            ]}
            fieldNames={{
              title: 'name',
              children: 'childList',
              key: 'id',
            }}
          />
        );
      },
    },
    {
      title: '菜单权限',
      render(text, record) {
        // console.log('record', record);
        return (
          <TreeWrap>
            <CenterNodeList record={record} />
          </TreeWrap>
        );
      },
    },
    {
      title: '具体权限',
    },
  ];
}
