import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavTextareaComponent } from './dav-textarea.component';

describe('DavTextareaComponent', () => {
  let component: DavTextareaComponent;
  let fixture: ComponentFixture<DavTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
