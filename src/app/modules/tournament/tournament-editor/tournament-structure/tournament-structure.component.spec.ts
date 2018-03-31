import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TournamentStructureComponent } from './tournament-structure.component';

describe('TournamentStructureComponent', () => {
  let component: TournamentStructureComponent;
  let fixture: ComponentFixture<TournamentStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TournamentStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TournamentStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
