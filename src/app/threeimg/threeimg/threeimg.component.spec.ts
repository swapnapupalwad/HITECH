import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeimgComponent } from './threeimg.component';

describe('ThreeimgComponent', () => {
  let component: ThreeimgComponent;
  let fixture: ComponentFixture<ThreeimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeimgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThreeimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
