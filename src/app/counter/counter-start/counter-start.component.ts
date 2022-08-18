import { Component, OnInit } from '@angular/core';
import {CounterService} from "../../services/counter.service";

@Component({
  selector: 'app-counter-start',
  templateUrl: './counter-start.component.html',
  styleUrls: ['./counter-start.component.css']
})
export class CounterStartComponent implements OnInit {

  counter: any;
  i = 100;

  constructor(private cs: CounterService) { }

  ngOnInit(): void {
  }

  startCounter() {
    this.counter = setInterval(() => {
      this.cs.sync.next(this.i) // sync -> Subject, .next -> object of the subject capable of publishing data
      this.i--;
      if (this.i < 0) {
        clearInterval(this.counter);
      }
    }, 1000);
  }

}
