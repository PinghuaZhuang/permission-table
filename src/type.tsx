import { ColumnsType, TableProps } from 'antd/es/table';
import { DataNode as AntdDataNode } from 'antd/es/tree';

export interface PermissionTableProps {
  dataSource: any[];
  columns?: Partial<ColumnsType>[];
  loading?: boolean;
  tableProps?: TableProps<Data>;
}

export interface BodyProps {
  list: Data[];
}

export interface Data extends AntdDataNode {
  childList: Data[];
  id: number;
  pId: number;
  name: string;
  level: number;
  parent: Data;
}

export interface TreeWrapProps {
  children: React.ReactNode;
}

export interface TreeWrapType {
  setShrink?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface CenterNodeListProps {
  record: Data;
}
