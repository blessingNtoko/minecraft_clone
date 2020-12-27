import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public DictIntersection(dictA, dictB) {
    const intersection = {};
    for (let k in dictB) {
      if (k in dictA) {
        intersection[k] = dictA[k];
      }
    }
    return intersection;
  }

  public DictDifference(dictA, dictB) {
    const diff = {...dictA};
    for (let k in dictB) {
      delete diff[k];
    }
    return diff;
  }
}
