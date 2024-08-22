import { Component, OnInit } from '@angular/core';
import { TasksService } from '../../core/services/tasks.service';
import { Task } from '../../core/models/tasks.interface';

@Component({
  selector: 'app-tasklist',
  standalone: true,
  imports: [],
  providers:[TasksService],
  templateUrl: './tasklist.component.html',
  styleUrl: './tasklist.component.scss'
})
export class TasklistComponent implements OnInit {

  tasks: Task[]=[];

  constructor(private tasksService: TasksService){}
  
  ngOnInit(): void {
    this.tasksService.tasks$.subscribe(items => {
      console.log(items);
      this.tasks = items;
    });

    setTimeout(()=>{
      this.addNewTask();
    },3000);
  }

  addNewTask(){
    this.tasksService.addNewTask(
      {
        id: 2, 
        name: 'Task 2', 
        description: 'This is task 2',
        status: 'pending',
        deadline: new Date,
        priority: 'Urgente',
      }
    )
  }
}
