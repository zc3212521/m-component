import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavGroupHeaderComponent } from './dav-group-header.component';

describe('DavGroupHeaderComponent', () => {
  let component: DavGroupHeaderComponent;
  let fixture: ComponentFixture<DavGroupHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavGroupHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavGroupHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
