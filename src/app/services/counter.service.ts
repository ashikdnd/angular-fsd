import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  sync = new Subject<number>();

  constructor() { }
}
