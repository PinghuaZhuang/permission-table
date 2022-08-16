import { ColumnsType, TableProps } from 'antd/es/table';
import { DataNode as AntdDataNode } from 'antd/es/tree';

export interface Column {
  title?: string;
}

export interface PermissionTableProps {
  dataSource: any[];
  columns?: Column[];
  loading?: boolean;
  defaultSelectedKeys?: string[] | number[];
}

export type PermissionTableTitleProps = Required<
  Pick<PermissionTableProps, 'columns'>
>;

export interface BodyProps {
  list: Data[];
}

export interface Data {
  childList: Data[];
  id: number;
  pId: number;
  name: string;
  level: number;
  parent: Data;
  className?: string;
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

export interface MenuListProps {
  columns: Column[];
  list: Data[];
}

export interface RowProps {
  data: Data;
  level: number;
}

export interface ExpandColDeepProps {
  data: Data | null;
  level: number;
  list: Data[];
  firstCenterCol?: boolean;
  expand?: boolean;
  setExpand?: React.Dispatch<React.SetStateAction<boolean>>;
}
