import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionTableComponent } from './election-table.component';

describe('ElectionTableComponent', () => {
  let component: ElectionTableComponent;
  let fixture: ComponentFixture<ElectionTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectionTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
