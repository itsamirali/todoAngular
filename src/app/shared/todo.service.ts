import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todoModel } from '../model/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  getListOfTodos() {
    return this.http.get('http://127.0.0.1:8000/api/');
  }

  createNewTodo(todo: todoModel) {
    const todoForApi = {
      Title: todo.title,
      is_completed: todo.isCompleted,
      is_open: todo.isOpen,
    };
    return this.http.post('http://127.0.0.1:8000/api/create', todoForApi);
  }

  removeATodo(id: number) {
    return this.http.delete(`http://127.0.0.1:8000/api/delete/${id}`);
  }
}
