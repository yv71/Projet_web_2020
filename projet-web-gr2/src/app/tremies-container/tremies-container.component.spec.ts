import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TremiesContainerComponent } from './tremies-container.component';

describe('TremiesContainerComponent', () => {
  let component: TremiesContainerComponent;
  let fixture: ComponentFixture<TremiesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TremiesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TremiesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
