import { Component, OnInit  } from '@angular/core';
import { ObserveComponent} from "../observe.component";

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {
  word: string = '';
  constructor(private oc: ObserveComponent) { }

  ngOnInit(): void {
    this.oc.stream.subscribe((res: any) => {
      this.word = res.toUpperCase();
    })
  }

}
