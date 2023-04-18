import { Component } from '@angular/core';
import { User } from '../interfaces/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  newUser: User = { username: "", password: ""} as any as User;

  constructor(private serv: UserService, private router: Router) {}

  onSubmit(): void {
    this.serv.addUser(this.newUser).subscribe(() => {
      this.router.navigate(['/stocks']);
    });
  }


}
