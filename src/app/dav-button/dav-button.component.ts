import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dav-button',
  templateUrl: './dav-button.component.html',
  styleUrls: ['./dav-button.component.less']
})
export class DavButtonComponent implements OnInit {

  @Input()
  nzType: string;

  constructor() { }

  ngOnInit() {
  }
}
