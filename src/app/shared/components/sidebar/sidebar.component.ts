import { Component, inject, OnInit } from '@angular/core';
import { Board } from '../../../core/models/tasks.interface';
import { TasksService } from '../../../core/services/tasks.service';
import { AuthService } from '@auth0/auth0-angular';
import { catchError, map, of } from 'rxjs';
import { CommonModule, DOCUMENT } from '@angular/common';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent implements OnInit {

    boards: Board[] = [];

    authService = inject(AuthService);

    loginState = false;

    constructor(private tasksService: TasksService) { 
      
    }

    ngOnInit() {
      this.verifyLogin().subscribe(isAuthenticated => {
        this.loginState = isAuthenticated;
  
        if (isAuthenticated) {
          this.tasksService.board$.subscribe((items: Board[]) => {
            this.boards = items;
            console.log(this.boards);
          });
        } else {
          this.boards = [];
          console.log('User is not authenticated');
        }
      });
    }

    verifyLogin(){
      return this.authService.isAuthenticated$.pipe(
        map((isAuthenticated: boolean) => isAuthenticated),
        catchError(() => of(false))
      );
    }
}
