import { Component } from '@angular/core';
import { todoModel } from '../model/todo.interface';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [],
})
export class TodoComponent {
  listOfTodos: any = []
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.getListOfTodosService()
  }

  getListOfTodosService() {
    this.todoService.getListOfTodos().subscribe(res => {
      console.log(res)
      this.listOfTodos = res
    })
  }

  onAddTodo(element: HTMLInputElement) {
    if (!element.value) return
    const todo = {
      title: element.value,
      isCompleted: false,
      isOpen: true,
    };
    this.todoService.createNewTodo(todo).subscribe(res => {
      this.getListOfTodosService()
      element.value = ''
    });
  }

  onRemoveTodo(id: number) {
    this.todoService.removeATodo(id).subscribe(res => {
      this.getListOfTodosService()
    })
  }
}
