import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  n1: number = 0;
  n2: number = 0;

  constructor() { }

  add() {
    return (this.n1 + this.n2).toString();
  }

  sub() {
    return (this.n1 - this.n2).toString();
  }

  mul() {
    return (this.n1 * this.n2).toString();
  }

  div() {
    return (this.n1 / this.n2).toString();
  }

  sequence() {
    return (Number(this.add()) + Number(this.sub()) + Number(this.mul()) + Number(this.div())).toString();
  }

}
