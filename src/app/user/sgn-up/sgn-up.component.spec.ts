import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SgnUpComponent } from './sgn-up.component';

describe('SgnUpComponent', () => {
  let component: SgnUpComponent;
  let fixture: ComponentFixture<SgnUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SgnUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SgnUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
