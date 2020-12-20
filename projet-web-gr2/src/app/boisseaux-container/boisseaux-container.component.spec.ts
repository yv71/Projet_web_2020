import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoisseauxContainerComponent } from './boisseaux-container.component';

describe('BoisseauxContainerComponent', () => {
  let component: BoisseauxContainerComponent;
  let fixture: ComponentFixture<BoisseauxContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoisseauxContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoisseauxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
