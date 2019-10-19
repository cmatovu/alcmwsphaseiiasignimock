import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistfromhttpserviceComponent } from './movielistfromhttpservice.component';

describe('MovielistfromhttpserviceComponent', () => {
  let component: MovielistfromhttpserviceComponent;
  let fixture: ComponentFixture<MovielistfromhttpserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovielistfromhttpserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielistfromhttpserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
