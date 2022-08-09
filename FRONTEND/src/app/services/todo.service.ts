import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private readonly http: HttpClient) {}

  private resource = environment.API_URL + '/todos';

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.resource);
  }

}
