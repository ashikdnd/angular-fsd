import { Component, OnInit } from '@angular/core';
import {MathService} from "../../services/math.service";

@Component({
  selector: 'app-div',
  templateUrl: './div.component.html',
  styleUrls: ['./div.component.css']
})
export class DivComponent implements OnInit {

  output: string = '';

  constructor(private math: MathService) { }

  ngOnInit(): void {
  }

  div() {
    console.log('division')
    this.output = this.math.div();
  }

}
