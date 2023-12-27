import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActusComponent } from './actus.component';

describe('ActusComponent', () => {
  let component: ActusComponent;
  let fixture: ComponentFixture<ActusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActusComponent]
    });
    fixture = TestBed.createComponent(ActusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
