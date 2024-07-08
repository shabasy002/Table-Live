import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectToTextComponent } from './select-to-text.component';

describe('SelectToTextComponent', () => {
  let component: SelectToTextComponent;
  let fixture: ComponentFixture<SelectToTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectToTextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
