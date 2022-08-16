import { ColumnsType, TableProps } from 'antd/es/table';
import { DataNode as AntdDataNode } from 'antd/es/tree';

export interface Column {
  title?: string;
}

export interface PermissionTableProps {
  dataSource: Data[];
  columns?: Column[];
  loading?: boolean;
  defaultSelectedKeys?: string[] | number[];
  onChange?: (
    selectedKeys: Required<PermissionTableProps['defaultSelectedKeys']>,
  ) => void;
}

export type PermissionTableTitleProps = Required<
  Pick<PermissionTableProps, 'columns'>
>;

export interface Data {
  childList: Data[];
  id: number;
  pId: number;
  name: string;
  level: number;
  parent: Data;
  checked: boolean;
  indeterminate: boolean;
  className?: string;
}
export interface MenuListProps {
  columns: Column[];
  list: Data[];
  onChange?: PermissionTableProps['onChange'];
}

export interface RowProps {
  data: Data;
}

export interface ExpandColDeepProps {
  data: Data | null;
  list: Data[];
  firstCenterCol?: boolean;
  expand?: boolean;
  setExpand: React.Dispatch<React.SetStateAction<boolean>>;
  setIndeterminate: React.Dispatch<React.SetStateAction<boolean>>;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}
