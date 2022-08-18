import { Component, OnInit } from '@angular/core';
import {MathService} from "../../services/math.service";

@Component({
  selector: 'app-sub',
  templateUrl: './sub.component.html',
  styleUrls: ['./sub.component.css']
})
export class SubComponent implements OnInit {

  output: string = '';

  constructor(private math: MathService) { }

  ngOnInit(): void {
  }

  sub() {
    this.output = this.math.sub();
  }

}
