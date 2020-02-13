import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MensaListComponent } from './mensalist.component';

describe('MensaListComponent', () => {
  let component: MensaListComponent;
  let fixture: ComponentFixture<MensaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MensaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MensaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
