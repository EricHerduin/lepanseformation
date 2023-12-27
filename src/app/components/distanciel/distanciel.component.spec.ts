import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DistancielComponent } from './distanciel.component';

describe('DistancielComponent', () => {
  let component: DistancielComponent;
  let fixture: ComponentFixture<DistancielComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DistancielComponent]
    });
    fixture = TestBed.createComponent(DistancielComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
