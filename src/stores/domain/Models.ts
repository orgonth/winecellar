import { types, Instance, SnapshotIn } from 'mobx-state-tree';

export const Wine = types.model({
  id: types.identifier,
  title: types.string,
});
export interface IWine extends Instance<typeof Wine> {}

export const Bottle = types.model({
  id: types.identifier,
  wine: types.late(() => types.reference(Wine)),
  year: types.integer,
});
export interface IBottle extends Instance<typeof Bottle> {}

export const LocalStore = types
  .model({
    wines: types.array(Wine),
    bottles: types.array(Bottle),
  })
  .actions((self) => ({
    addWine(w: SnapshotIn<typeof Wine> | IWine) {
      self.wines.push(w);
    },
    addBottle(b: SnapshotIn<typeof Bottle> | IBottle) {
      self.bottles.push(b);
    },
  }));
