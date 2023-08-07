import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from "@angular/material/toolbar";
import { SquareRoutingModule } from './square-routing.module';
import { SquareComponent } from './square.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { UserLayoutComponent } from './components/user-layout/user-layout.component';
import {UserCreateDialogComponent} from "./components/user-create-dialog/user-create-dialog.component";
import {FirstPageComponent} from "./components/first-page/first-page.component";
import { MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    SquareComponent,
    UserCreateDialogComponent,
    FirstPageComponent,
    UserLayoutComponent,
  ],
  imports: [
    CommonModule,
    SquareRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class SquareModule { }
