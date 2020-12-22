import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamionsContainerComponent } from './camions-container.component';

describe('CamionsContainerComponent', () => {
  let component: CamionsContainerComponent;
  let fixture: ComponentFixture<CamionsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CamionsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CamionsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
