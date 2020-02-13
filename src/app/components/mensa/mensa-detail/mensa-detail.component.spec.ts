import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MensaDetailComponent } from './mensa-detail.component';

describe('MensaDetailComponent', () => {
  let component: MensaDetailComponent;
  let fixture: ComponentFixture<MensaDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensaDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
