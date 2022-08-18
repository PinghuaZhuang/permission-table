import React from 'react';
import TreeModel from './TreeModel';
import { PermissionTableProps } from './type';

export type ContextType = Pick<PermissionTableProps, 'columns'> & {
  dataSource: TreeModel[];
  maxLevel: number;
  onChange: () => void;
  dispatchMap: {
    [P: string]: {
      checked: React.Dispatch<React.SetStateAction<boolean>>;
      indeterminate: React.Dispatch<React.SetStateAction<boolean>>;
    };
  };
};

// @ts-ignore
const Context = React.createContext<ContextType>({});

export interface ContextProvider {
  children?: React.ReactNode;
}

export const Provider = Context.Provider;

export default Context;
