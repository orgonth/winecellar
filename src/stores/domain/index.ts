import { createContext, useContext } from 'react';
import { Instance } from 'mobx-state-tree';
import { LocalStore, Rack } from './Models';
import uuid from 'react-native-uuid';

export class RootStore {
  localStore: Instance<typeof LocalStore>;

  constructor() {
    // for now we have a single rack
    const r = Rack.create({
      id: uuid.v4().toString(),
    }).setCapacity(10, 6);

    this.localStore = LocalStore.create({
      rack: r as any,
    });
  }
}

export const rootStore = new RootStore();

export const StoreContext = createContext(rootStore);
export const StoreProvider = StoreContext.Provider;
export const useStore = () => useContext(StoreContext);
