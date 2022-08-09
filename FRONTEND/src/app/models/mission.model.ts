import { Todo } from './todo.model';
import { User } from './user.model';

export class Mission {
  id: number;
  user: number;
  todo: Todo;
  created_at: Date;
  active: boolean;
}
