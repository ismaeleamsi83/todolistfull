import { Component, Inject, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TasksService } from '../../../core/services/tasks.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { timestamp } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenubarModule, CommonModule, DialogModule, ButtonModule, InputTextModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items: MenuItem[];

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }
    
  constructor(
    @Inject(DOCUMENT) public document: Document, 
    public auth: AuthService,
    private tasksService: TasksService
  ) {
    this.items = [
      {
        label: 'Tableros',
        icon: 'pi pi-clipboard',
        command: () => this.executeCommand('tableros')
        
      },
      {
        label: 'Reciente',
        icon: 'pi pi-history',
        command: () => this.executeCommand('reciente')
        
      },
      {
        label: 'Crear Tablero',
        icon: 'pi pi-file-plus',
        // command: () => this.executeCommand('board')
        command: () => this.showDialog()
      },
    ];

   }

  ngOnInit(): void {
    
  }

  executeCommand(command?: string):void{
    console.log("la funcion funciona");
    //console.log(command);
    switch(command){
      case 'board':
        this.addNewBoard();
        break;
    }
  }

  addNewBoard(){
    const newBoard = {
      id: 4,
      name: "nuevoboard",
      description: "nueva descripcion",
      status: "estado operativo",
      deadline: new Date,
      listTask: []
    }
    this.tasksService.addNewBoard(newBoard);
    //console.log("click desde component");
    setTimeout(()=>{
      this.tasksService.board$.subscribe(item => console.log(item));
    },2000);
    
  }


}
