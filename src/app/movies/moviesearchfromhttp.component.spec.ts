import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesearchfromhttpComponent } from './moviesearchfromhttp.component';

describe('MiviesearchfromhttpComponent', () => {
  let component: MoviesearchfromhttpComponent;
  let fixture: ComponentFixture<MoviesearchfromhttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesearchfromhttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesearchfromhttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
