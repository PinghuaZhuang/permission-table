import React from 'react';
import { PermissionTableProps } from './type';

export type ContextType = Pick<
  PermissionTableProps,
  'columns' | 'dataSource'
> & {
  maxLevel: number;
  onChange?: () => void;
};

// @ts-ignore
const Context = React.createContext<ContextType>({});

export interface ContextProvider {
  children?: React.ReactNode;
}

export const Provider = Context.Provider;

export default Context;
