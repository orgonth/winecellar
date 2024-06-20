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
    _rows: types.optional(types.integer, 0),
    _columns: types.optional(types.integer, 0),
    _bottles: types.array(types.maybeNull(Bottle)),
  })
  .actions((self) => ({
    setCapacity(rows: number, columns: number) {
      self._bottles.replace(
        new Array<IBottle | null>(rows * columns).fill(null),
      );
      self._rows = rows;
      self._columns = columns;
      return self;
    },

    setBottle(
      b: SnapshotIn<typeof Bottle> | IBottle,
      row: number,
      column: number,
    ) {
      if (row >= self._rows || column >= self._columns) {
        console.log('Error: wrong location');
      } else {
        self._bottles.splice(row * self._columns + column, 1, b);
      }
    },
  }))
  .views((self) => ({
    get bottles() {
      return self._bottles.filter((e) => e !== null) as Array<IBottle>;
    },
    get capacity() {
      return self._rows * self._columns;
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
