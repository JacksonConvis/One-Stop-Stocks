import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-list-of-users',
  templateUrl: './list-of-users.component.html',
  styleUrls: ['./list-of-users.component.css']
})
export class ListOfUsersComponent {

  users: User[] = [];
  UserOne: User = { username: "", password: ""} as any as User;
  constructor(private serv: UserService, private router: Router) {}

  ngOnInit(): void {
  
    this.loadUsers();
  }

  onSubmit() {}
  
  updateUser(user: User){
    this.serv.addUser(user).subscribe(() => {
     this.loadUsers
    });

  }

  loadUsers(){
    this.serv.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }


}
