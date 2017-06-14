import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaempiezaComponent } from './agendaempieza.component';

describe('AgendaempiezaComponent', () => {
  let component: AgendaempiezaComponent;
  let fixture: ComponentFixture<AgendaempiezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaempiezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaempiezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
