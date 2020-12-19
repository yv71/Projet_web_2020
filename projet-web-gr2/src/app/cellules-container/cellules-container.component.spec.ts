import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CellulesContainerComponent } from './cellules-container.component';

describe('CellulesContainerComponent', () => {
  let component: CellulesContainerComponent;
  let fixture: ComponentFixture<CellulesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CellulesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CellulesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
