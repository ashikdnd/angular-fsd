import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strings-and-numbers',
  templateUrl: './strings-and-numbers.component.html',
  styleUrls: ['./strings-and-numbers.component.css']
})
export class StringsAndNumbersComponent implements OnInit {

  birthday: Date;
  totalBill: number;
  pipeText: string;
  number: number;
  exponent: number;

  constructor() {
    this.birthday = new Date('2000-05-10');
    this.totalBill = 45860.1234564;
    this.pipeText = '';
    this.number = 0;
    this.exponent = 0;
  }

  ngOnInit(): void {
  }

  changeText(e: any) {
    const words = e.target.value;
    e.target.value = words.replaceAll(' ', '-');
  }

}
