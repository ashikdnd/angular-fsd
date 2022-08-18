import { Component, OnInit } from '@angular/core';
import {MathService} from "../../services/math.service";

@Component({
  selector: 'app-mul',
  templateUrl: './mul.component.html',
  styleUrls: ['./mul.component.css']
})
export class MulComponent implements OnInit {

  output: string = '';

  constructor(private math: MathService) { }

  ngOnInit(): void {
  }

  mul() {
    this.output = this.math.mul();
  }

}
