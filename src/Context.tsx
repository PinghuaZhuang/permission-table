import React from 'react';
import TreeModel, { Diff } from './TreeModel';
import { PermissionTableProps } from './type';

export type ContextType = Pick<PermissionTableProps, 'columns'> & {
  dataSource: TreeModel[];
  maxLevel: number;
  onChange: () => void;
  dispatchMap: {
    [P: string]: {
      checked?: React.Dispatch<React.SetStateAction<boolean>>;
      indeterminate?: React.Dispatch<React.SetStateAction<boolean>>;
      expand?: React.Dispatch<React.SetStateAction<boolean>>;
    };
  };
  dispatchWithDiff: (diff: Diff) => void;
  authWidth: number;
};

const Context = React.createContext<ContextType>({} as ContextType);

export interface ContextProvider {
  children?: React.ReactNode;
}

export const Provider = Context.Provider;

export default Context;
