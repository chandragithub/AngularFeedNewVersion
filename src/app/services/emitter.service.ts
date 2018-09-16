import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  constructor() { }
  private static _emitters: { [ID: string]: EventEmitter<any> } = {};
  // Set a new event in the store with a given ID
  // as key
  static get(ID: string): EventEmitter<any> {
    if (!this._emitters[ID])
      this._emitters[ID] = new EventEmitter();
    return this._emitters[ID];
  }
}
