import { Component, OnInit } from '@angular/core';
import {MathService} from "../../services/math.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  output: string = '';
  constructor(private math: MathService) { }

  ngOnInit(): void {
  }

  add() {
    this.output = (this.math.n1 + this.math.n2).toString();
  }
}
