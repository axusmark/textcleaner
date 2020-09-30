import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimpiadorEspaciosComponent } from './limpiador-espacios.component';

describe('LimpiadorEspaciosComponent', () => {
  let component: LimpiadorEspaciosComponent;
  let fixture: ComponentFixture<LimpiadorEspaciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimpiadorEspaciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimpiadorEspaciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
