import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dav-input',
  templateUrl: './dav-input.component.html',
  styleUrls: ['./dav-input.component.less']
})
export class DavInputComponent implements OnInit {

  @Input()
  public placeholder: string;

  @Input()
  public value: string;

  @Input()
  public nzRequired: boolean;

  @Input()
  public nzLabelName: any;

  public hasLabel = false;

  constructor() { }

  ngOnInit() {
    if(this.nzLabelName !== '' && this.nzLabelName) {
      this.hasLabel = true;
    }
  }


}
