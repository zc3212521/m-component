import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DavModalComponent } from './dav-modal.component';

describe('DavModalComponent', () => {
  let component: DavModalComponent;
  let fixture: ComponentFixture<DavModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DavModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DavModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
