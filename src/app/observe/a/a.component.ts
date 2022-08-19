import { Component, OnInit } from '@angular/core';
import { ObserveComponent } from "../observe.component";

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {
  word: string = '';
  constructor(private oc: ObserveComponent) { }

  ngOnInit(): void {
    this.oc.stream.subscribe((res: any) => {
     this.word = res.toLowerCase();
    })
  }

}
