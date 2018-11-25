import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavInputComponent } from './dav-input.component';

describe('DavInputComponent', () => {
  let component: DavInputComponent;
  let fixture: ComponentFixture<DavInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
