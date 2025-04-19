import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonappComponent } from './monapp.component';

describe('MonappComponent', () => {
  let component: MonappComponent;
  let fixture: ComponentFixture<MonappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MonappComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MonappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
