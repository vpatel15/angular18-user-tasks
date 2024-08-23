import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTaskComponent } from './new-task/new-task.component';
import { TaskComponent } from './task/task.component';
import { TasksComponent } from './tasks.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewTaskComponent, TaskComponent, TasksComponent],
  imports: [
    SharedModule, CommonModule, FormsModule
  ],
  exports:[NewTaskComponent, TaskComponent, TasksComponent]
})
export class TasksModule { }
