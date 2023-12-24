import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandChildAComponent } from './grand-child-a.component';

describe('GrandChildAComponent', () => {
  let component: GrandChildAComponent;
  let fixture: ComponentFixture<GrandChildAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrandChildAComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GrandChildAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
