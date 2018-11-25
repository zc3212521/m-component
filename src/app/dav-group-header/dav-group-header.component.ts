import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'dav-group-header',
  templateUrl: './dav-group-header.component.html',
  styleUrls: ['./dav-group-header.component.less']
})
export class DavGroupHeaderComponent implements OnInit {

  @Input()
  ngShowAll: boolean = false;

  @Input()
  ngTitle: string;

  @Output()
  ngToggle = new EventEmitter();

  /**
   * autor zhangchao
   */
  toggleShow(): void {
    this.ngToggle.emit();
  }

  constructor() { }

  ngOnInit() {
  }

}
