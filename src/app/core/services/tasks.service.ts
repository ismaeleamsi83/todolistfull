import { Injectable, OnInit } from '@angular/core';
import { Board, Task } from '../models/tasks.interface';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksBehavior = new BehaviorSubject<Task[]>([]);
  tasks$ = this.tasksBehavior.asObservable();


  boardBehavior = new BehaviorSubject<Board[]>([]);
  board$ = this.boardBehavior.asObservable();


  constructor() {
    this.tasksBehavior.next([
      {
        id: 1, 
        name: 'Task 1', 
        description: 'This is task',
        status: 'pending',
        deadline: new Date,
        priority: 'Urgente',
      }
      ]);
   }


   addNewBoard(board: Board){
    const actualBoard = this.boardBehavior.getValue();
    //const listBoard = [...actualBoard, board];
    this.boardBehavior.next([...actualBoard, board]);
    console.log("add new board");
   }


  


  // getTasks(): Task[]{
  //   return this.tasksBehavior.getValue();
  // }

  addNewTask(task: Task){
    const listTask = [...this.tasksBehavior.getValue(), task];
    this.tasksBehavior.next(listTask);
  }
}
