import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../app/Service/user.service";
import {User} from "../model/user.interface";
import {MatDialog} from "@angular/material/dialog";
import {UserCreateDialogComponent} from "../user-create-dialog/user-create-dialog.component";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout.component.scss']
})
export class UserLayoutComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService,
              public dialog: MatDialog,
              private router: Router,)
  {}

  ngOnInit() {
    this.userService.getUsers$().subscribe((users) => {
      this.users = users;
    })
  }


  openEditDialog(user: User) {
    this.dialog.open(UserCreateDialogComponent,
      {
        data: user
      }).afterClosed().subscribe((result) => {
      console.log(result)
      this.userService.editUser(result)
    })
  }

  deleteUser(id: number | undefined) {
    this.userService.deleteUer(id)

  }

  startQuiz(id: number | undefined) {
    this.router.navigate(['quiz', id])
  }
}

