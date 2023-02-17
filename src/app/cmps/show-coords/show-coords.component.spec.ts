import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCoordsComponent } from './show-coords.component';

describe('ShowCoordsComponent', () => {
  let component: ShowCoordsComponent;
  let fixture: ComponentFixture<ShowCoordsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowCoordsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCoordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
