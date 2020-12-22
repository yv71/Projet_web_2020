import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesContainerComponent } from './commandes-container.component';

describe('CommandesContainerComponent', () => {
  let component: CommandesContainerComponent;
  let fixture: ComponentFixture<CommandesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
