import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
interface MenuStyle {
  name: string,
  url: string,
  target?: string
}

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.css']
})
export class BlogHeaderComponent implements OnInit {

  @Input() menuList: MenuStyle[] = [];
  @Output() menuClicked: EventEmitter<MenuStyle> = new EventEmitter<MenuStyle>();
  // @Output() menuClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.menuList)
  }

  clicked(m: MenuStyle) {
    this.menuClicked.emit(m);
  }

}
