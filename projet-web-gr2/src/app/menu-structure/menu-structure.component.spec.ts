import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStructureComponent } from './menu-structure.component';

describe('MenuStructureComponent', () => {
  let component: MenuStructureComponent;
  let fixture: ComponentFixture<MenuStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuStructureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
