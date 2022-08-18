import { Component, OnInit } from '@angular/core';
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-counter-info',
  templateUrl: './counter-info.component.html',
  styleUrls: ['./counter-info.component.css']
})
export class CounterInfoComponent implements OnInit {

  counterVal: number = 0;

  constructor(private cs: CounterService) { }

  ngOnInit(): void {
    this.cs.sync.subscribe((n: number) => {
      this.counterVal = n;
    })
  }

}
