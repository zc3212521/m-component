import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dav-screen-item',
  templateUrl: './dav-screen-item.component.html',
  styleUrls: ['./dav-screen-item.component.less']
})
export class DavScreenItemComponent implements OnInit {


  type: string = 'publish'

  constructor() { }

  ngOnInit() {
  }

}
