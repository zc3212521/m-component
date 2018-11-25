import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dav-screen-item',
  templateUrl: './dav-screen-item.component.html',
  styleUrls: ['./dav-screen-item.component.less']
})
export class DavScreenItemComponent implements OnInit {


  @Input()
  type: string;

  @Input()
  title: string;

  @Input()
  bg: string;

  bgObj: any = {};

  constructor() {

  }

  ngOnInit() {
    this.bgObj = {
      'background-image': `url(${this.bg})`,
    };
  }

}
