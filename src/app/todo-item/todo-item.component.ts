import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDoItem } from '../todo-item';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() item: ToDoItem | undefined;
  @Output() toggle = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  toggleItem(): void {
    this.toggle.emit();
  }

}
