import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'dav-modal',
  templateUrl: './dav-modal.component.html',
  styleUrls: ['./dav-modal.component.less']
})
export class DavModalComponent implements OnInit {

  @Input()
  nzVisible: boolean;

  @Input()
  nzTitle: string;

  @Output()
  nzOnCancel = new EventEmitter();

  @Output()
  nzOnOk = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

  handleCancel() {
    this.nzOnCancel.emit();
  }

  handleOk() {
    this.nzOnOk.emit();
  }
}
