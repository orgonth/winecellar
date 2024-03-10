import { makeAutoObservable, runInAction, reaction } from 'mobx';
import { createContext } from 'react';
import uuid from 'react-native-uuid';

export class Wine {
  id = uuid.v4();
  title: string;

  constructor(title: string) {
    makeAutoObservable(this);
    console.log(`Create wine: ${title} / ${this.id}`);
    this.title = title;
  }
}

export class WineStore {
  wines: Wine[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  createWine(title: string) {
    this.wines.push(new Wine(title));
  }
}
