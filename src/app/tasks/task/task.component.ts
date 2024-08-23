import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  // standalone: true,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) task!: Task;
  // @Output() complete = new EventEmitter<string>();
  private taskService = inject(TasksService);

  // const { id, userId, title, summary, dueDate } = this.task;

  onComplete(){
    this.taskService.removeTask(this.task.id);
  }

}
