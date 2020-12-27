import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  constructor() { }

  public rand_range(a, b) {
    return Math.random() * (b - a) + a;
  }

  public rand_normalish() {
    const r = Math.random() + Math.random() + Math.random() + Math.random();
    return (r / 4.0) * 2.0 - 1;
  }

  public rand_int(a, b) {
    return Math.round(Math.random() * (b - a) + a);
  }

  public lerp(x, a, b) {
    return x * (b - a) + a;
  }

  public clamp(x, a, b) {
    return Math.min(Math.max(x, a), b);
  }

  public sat(x) {
    return Math.min(Math.max(x, 0.0), 1.0);
  }
}
