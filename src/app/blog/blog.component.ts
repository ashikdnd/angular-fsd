import { Component, OnInit } from '@angular/core';
interface MenuStyle {
  name: string,
  url: string,
  target?: string
}

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {

  menuItems: MenuStyle[] = [
    {name: 'Technology', url: 'http://google.com'},
    {name: 'Automotive', url: 'http://google.com'},
    {name: 'Finance', url: 'http://google.com'},
    {name: 'Politics', url: 'http://google.com'},
    {name: 'Culture', url: 'http://google.com'},
    {name: 'Sports', url: 'http://google.com', target: '_self'},
    {name: 'NodeJS', url: 'http://nodejs.org', target: '_blank'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  childTalkingToParent(e: MenuStyle) {
    console.log(e)
  }

}
