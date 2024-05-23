import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothSelectorComponent } from './cloth-selector.component';

describe('ClothSelectorComponent', () => {
  let component: ClothSelectorComponent;
  let fixture: ComponentFixture<ClothSelectorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClothSelectorComponent]
    });
    fixture = TestBed.createComponent(ClothSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
