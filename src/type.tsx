import TreeModel, { Data as TreeData } from './TreeModel';

export interface Column {
  title?: string;
}

export interface PermissionTableProps {
  value?: string[] | number[];
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

export interface Data extends TreeData {
  parent: Data;
  expand?: boolean;
}
export interface MenuListProps {
  columns: Column[];
  list: TreeModel[];
  onChange?: PermissionTableProps['onChange'];
}

export interface RowProps {
  data: TreeModel;
}

export interface ExpandColDeepProps {
  data: TreeModel | null;
  list: TreeModel[];
  firstCenterCol?: boolean;
  expand?: boolean;
  setExpand?: React.Dispatch<React.SetStateAction<boolean>>;
}
