import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';
import { tap } from 'rxjs';
import { MissionService } from 'src/app/services/mission.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoComponent implements OnInit {
  constructor(
    private readonly todoService: TodoService,
    private readonly missionService: MissionService,
    private readonly cdr: ChangeDetectorRef
  ) {}

  todosList: Todo[] = [];

  ngOnInit(): void {
    this.getTodos();
  }

  getTodos() {
    this.todoService
      .getTodos()
      .pipe(
        tap((todos) => (this.todosList = todos)),
        tap((todos) => console.log(todos)),
        tap(() => this.cdr.markForCheck())
      )
      .subscribe();
  }

  doTodo(todo: number) {
    let user = parseInt(JSON.parse(localStorage.getItem('user')).id);
    console.log(typeof user, typeof todo);

    this.missionService.createMission(user, todo).subscribe();
  }
}
