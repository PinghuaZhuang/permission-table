import { ColumnsType } from 'antd/es/table';

export interface PermissionTableProps {
  dataSource: any[];
  columns?: Partial<ColumnsType>[];
  loading?: boolean;
}

export interface BodyProps {
  list: Data[];
}

export interface Data {
  childList: Data[];
  id: number;
  pId: number;
  name: string;
}
