import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDebounceComponent } from './angular-debounce.component';

describe('AngularDebounceComponent', () => {
  let component: AngularDebounceComponent;
  let fixture: ComponentFixture<AngularDebounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularDebounceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AngularDebounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
