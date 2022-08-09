export class User {
  id: number;
  name: string;
  email: string;
  password: string;
  is_staff: boolean;
  is_active: boolean;

  constructor(
    id?: number,
    name?: string,
    email?: string,
    password?: string,
    is_staff?: boolean,
    is_active?: boolean
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.is_staff = is_staff;
    this.is_active = is_active;
  }
}
