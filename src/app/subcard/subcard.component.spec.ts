import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcardComponent } from './subcard.component';

describe('SubcardComponent', () => {
  let component: SubcardComponent;
  let fixture: ComponentFixture<SubcardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubcardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
