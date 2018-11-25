import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavScreenItemComponent } from './dav-screen-item.component';

describe('DavScreenItemComponent', () => {
  let component: DavScreenItemComponent;
  let fixture: ComponentFixture<DavScreenItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavScreenItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavScreenItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
