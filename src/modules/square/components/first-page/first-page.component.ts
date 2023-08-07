import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {UserCreateDialogComponent} from "../user-create-dialog/user-create-dialog.component";
import {UserService} from "../../../../app/Service/user.service";
import {filter} from "rxjs";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent {
  constructor(public dialog: MatDialog, private userService: UserService) {
  }

  openDialog() {
    this.dialog.open(UserCreateDialogComponent).afterClosed().pipe( filter((result) => result)).subscribe(result => {
      this.userService.addNewUser(result)

    });
  }

}

