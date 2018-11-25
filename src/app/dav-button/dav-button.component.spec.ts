import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavButtonComponent } from './dav-button.component';

describe('DavButtonComponent', () => {
  let component: DavButtonComponent;
  let fixture: ComponentFixture<DavButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
