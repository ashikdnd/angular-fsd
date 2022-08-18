import { Component, OnInit } from '@angular/core';
import {MathService} from "../services/math.service";
import {FormControl} from "@angular/forms";
import {debounceTime} from "rxjs";
import {CounterService} from "../services/counter.service";

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit {

  n1: FormControl = new FormControl();
  n2: FormControl = new FormControl();
  sequence: string = '';
  counterVal: number = 0;

  constructor(private math: MathService, private cs: CounterService) {
  }

  ngOnInit(): void {
    this.cs.sync.subscribe((val: number) => {
      this.counterVal = val;
    })
    this.n1.valueChanges.pipe(debounceTime(10)).subscribe((res: string) => {
      this.math.n1 = Number(res);
    })
    this.n2.valueChanges.pipe(debounceTime(10)).subscribe((res: string) => {
      this.math.n2 = Number(res);
    })
  }

  seq() {
    this.sequence = this.math.sequence();
  }

}
