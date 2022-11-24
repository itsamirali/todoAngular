import { Component } from '@angular/core';
import { todoModel } from '../model/todo.interface';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent {
  listOfTodos: todoModel[] = []
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getListOfTodosService()
  }

  getListOfTodosService() {
    this.listOfTodos = this.todoService.getListOfTodos()
  }

  onAddTodo(element: HTMLInputElement) {
    if (!element.value) return
    const todo = {
      title: element.value,
      isCompleted: false,
      isOpen: true,
    };
    this.todoService.createNewTodo(todo);
  }
}
