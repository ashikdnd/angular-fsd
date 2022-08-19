import { Component, OnInit } from '@angular/core';
import {ObserveService} from "../services/observe.service";
import {fromEvent, Observable} from "rxjs";

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  key: string = '';

  stream: Observable<string> = new Observable<string>((o) => {
    // Data created here can be published
    // Next line o.next() is the publisher
    let inputElement = document.getElementById('user-input') as HTMLInputElement;
    fromEvent(inputElement, 'input').subscribe((res: any) => {
      o.next(res.target.value);
    })
  })

  constructor(private ob: ObserveService) { }

  ngOnInit(): void {

  }

}
