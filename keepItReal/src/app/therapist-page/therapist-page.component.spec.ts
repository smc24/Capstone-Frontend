import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistPageComponent } from './therapist-page.component';

describe('TherapistPageComponent', () => {
  let component: TherapistPageComponent;
  let fixture: ComponentFixture<TherapistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TherapistPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
