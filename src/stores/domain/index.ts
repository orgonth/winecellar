import { createContext, useContext } from 'react';
import { Instance } from 'mobx-state-tree';
import { LocalStore } from './Models';

export class RootStore {
  localStore: Instance<typeof LocalStore>;

  constructor() {
    this.localStore = LocalStore.create({ wines: [], bottles: [] });
  }
}

export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
