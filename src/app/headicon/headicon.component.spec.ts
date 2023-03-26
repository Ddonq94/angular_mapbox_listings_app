import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadiconComponent } from './headicon.component';

describe('HeadiconComponent', () => {
  let component: HeadiconComponent;
  let fixture: ComponentFixture<HeadiconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadiconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadiconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
