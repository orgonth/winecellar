import { types, Instance, SnapshotIn } from 'mobx-state-tree';

/// @brief A wine is a generic description of a wine
export const Wine = types.model({
  id: types.identifier,
  title: types.string,
});
export interface IWine extends Instance<typeof Wine> {}

/// @brief A bottle is a Wine instance with extra fields
export const Bottle = types.model({
  id: types.identifier,
  wine: types.late(() => types.reference(Wine)),
  year: types.integer,
});
export interface IBottle extends Instance<typeof Bottle> {}

/// @brief A rack is a collection of bottles
export const Rack = types
  .model({
    id: types.identifier,
    bottles: types.array(Bottle),
  })
  .actions((self) => ({
    addBottle(b: SnapshotIn<typeof Bottle> | IBottle) {
      self.bottles.push(b);
    },
  }));
export interface IRack extends Instance<typeof Rack> {}

/// @brief A store is a collection of racks
export const LocalStore = types
  .model({
    wines: types.array(Wine),
    rack: Rack,
  })
  .actions((self) => ({
    addWine(w: SnapshotIn<typeof Wine> | IWine) {
      self.wines.push(w);
    },
  }));
