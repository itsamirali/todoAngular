import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { todoModel } from '../model/todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}
  getListOfTodos() {
    let listOfProduct: todoModel[] = [];
    this.http
      .get<todoModel[]>('http://127.0.0.1:8000/api/')
      .pipe()
      .subscribe((res) => {
        listOfProduct = res;
      });
    return listOfProduct;
  }

  createNewTodo(todo: todoModel) {
    const todoForApi = {
      Title: todo.title,
      is_completed: todo.isCompleted,
      is_open: todo.isOpen,
    };
    this.http
      .post('http://127.0.0.1:8000/api/create', todoForApi)
      .subscribe((res) => {
        console.log(res);
      });
  }

  removeATodo(id: number) {
    this.http
      .delete(`http://127.0.0.1:8000/api/delete/${id}`)
      .subscribe((res) => {
        console.log(res);
      });
  }
}
