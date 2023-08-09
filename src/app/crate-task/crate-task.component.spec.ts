import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrateTaskComponent } from './crate-task.component';

describe('CrateTaskComponent', () => {
  let component: CrateTaskComponent;
  let fixture: ComponentFixture<CrateTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrateTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
