import { TodoService } from './todo.service';
import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('todoService', () => {
  let todosService: TodoService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TodoService],
    });
    todosService = TestBed.get(TodoService);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  it('should retrieve all todos', () => {
    todosService.getListOfTodos().subscribe((todos) => {
      expect(todos).toBeTruthy('no todos retured');
    });
  });
  it('should have equaly value in retrieving todo with id of 3', () => {
    todosService.getListOfTodos().subscribe((todos) => {
      const todo = Object.values(todos).find((todo) => todo.id === 3);
      expect(todo.title).toBe('todo number two');
    });
  });
});
