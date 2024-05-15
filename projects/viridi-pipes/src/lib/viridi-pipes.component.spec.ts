import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViridiPipesComponent } from './viridi-pipes.component';

describe('ViridiPipesComponent', () => {
  let component: ViridiPipesComponent;
  let fixture: ComponentFixture<ViridiPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViridiPipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViridiPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
