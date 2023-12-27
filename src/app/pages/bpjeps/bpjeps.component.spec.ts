import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpjepsComponent } from './bpjeps.component';

describe('BpjepsComponent', () => {
  let component: BpjepsComponent;
  let fixture: ComponentFixture<BpjepsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BpjepsComponent]
    });
    fixture = TestBed.createComponent(BpjepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
