import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovielistfromserviceComponentComponent } from './movielistfromservice-component.component';

describe('MovielistfromserviceComponentComponent', () => {
  let component: MovielistfromserviceComponentComponent;
  let fixture: ComponentFixture<MovielistfromserviceComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovielistfromserviceComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovielistfromserviceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
