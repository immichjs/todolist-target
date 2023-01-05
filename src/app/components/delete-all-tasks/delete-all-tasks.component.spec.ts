import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAllTasksComponent } from './delete-all-tasks.component';

describe('DeleteAllTasksComponent', () => {
  let component: DeleteAllTasksComponent;
  let fixture: ComponentFixture<DeleteAllTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAllTasksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAllTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
