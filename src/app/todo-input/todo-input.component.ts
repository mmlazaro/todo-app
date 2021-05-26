import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToDoItem } from '../todo-item';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.scss']
})
export class TodoInputComponent implements OnInit {

  todoForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  @Output() toDoItem = new EventEmitter<ToDoItem>();
  constructor() { }

  ngOnInit(): void {
  }

  submit(): void {
    const formValue = this.todoForm.value;
    const todo = new ToDoItem(formValue.name, formValue.description);
    this.toDoItem.emit(todo);
  }
}
