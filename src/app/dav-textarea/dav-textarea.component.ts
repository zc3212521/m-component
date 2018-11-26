import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'dav-textarea',
  templateUrl: './dav-textarea.component.html',
  styleUrls: ['./dav-textarea.component.less']
})
export class DavTextareaComponent implements OnInit {

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
