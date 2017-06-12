import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelasartesComponent } from './delasartes.component';

describe('DelasartesComponent', () => {
  let component: DelasartesComponent;
  let fixture: ComponentFixture<DelasartesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelasartesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelasartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
