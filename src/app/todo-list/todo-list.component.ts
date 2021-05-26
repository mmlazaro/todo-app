import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../todo-item';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() todoList: ToDoItem[] = [];
  @Output() toggleItem = new EventEmitter<ToDoItem>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle(item: ToDoItem): void {
    this.toggleItem.emit(item);
  }

}
