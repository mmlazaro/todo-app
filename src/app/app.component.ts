import { Component } from '@angular/core';
import { ToDoItem } from './todo-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'recruitment-app';
  toDoList: ToDoItem[] = [];

  addItemToList(todo: ToDoItem): void {
    this.toDoList.push(todo);
  }

  toggleItem(todo: ToDoItem): void {
    this.toDoList = this.toDoList.map(item => {
      if (todo.description === item.description && todo.name === item.name) {
        item.status = !item.status;
      }
      return item;
    });

    console.log(this.toDoList);
  }
}
