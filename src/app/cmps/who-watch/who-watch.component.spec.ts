import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoWatchComponent } from './who-watch.component';

describe('WhoWatchComponent', () => {
  let component: WhoWatchComponent;
  let fixture: ComponentFixture<WhoWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoWatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
