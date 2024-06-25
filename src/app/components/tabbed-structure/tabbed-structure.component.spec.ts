import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabbedStructureComponent } from './tabbed-structure.component';

describe('TabbedStructureComponent', () => {
  let component: TabbedStructureComponent;
  let fixture: ComponentFixture<TabbedStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabbedStructureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TabbedStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
