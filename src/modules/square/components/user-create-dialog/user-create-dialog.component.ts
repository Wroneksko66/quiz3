import {Component, Inject, Optional} from '@angular/core';
import { FormControl, FormGroup,Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {User} from "../model/user.interface";
import {nineDigitsValidator} from "../validators/phone-number.validator";


@Component({
  selector: 'app-user-create-dialog',
  templateUrl: './user-create-dialog.component.html',
  styleUrls: ['./user-create-dialog.component.scss']
})
export class UserCreateDialogComponent {
  constructor(   public dialogRef: MatDialogRef<UserCreateDialogComponent>,
                 @Optional() @Inject(MAT_DIALOG_DATA) public data: User) {
  }
  userForm = new FormGroup({
    nickName: new FormControl(this.data?.nickName || '',
      [Validators.required, Validators.maxLength(7), Validators.minLength(2)]),
    name: new FormControl(this.data?.name || '' ,
      [Validators.required, Validators.maxLength(10), Validators.minLength(2)]),
    mail: new FormControl(this.data?.mail || '',
      [Validators.required, Validators.email]),
    number: new FormControl(this.data?.number || '',
      [Validators.required, nineDigitsValidator()])
  })

 get nickName(){
    return this.userForm.get('nickName')
 }
 get name(){
    return this.userForm.get('name')
 }

 get mail(){
    return this.userForm.get('mail')
 }

 get number(){
    return this.userForm.get('number')
 }
  addUser(){
    if(this.userForm.valid){
      this.dialogRef.close({

        id: this.data?.id !==undefined? this.data.id: Math.floor(Math.random() * 100),
        name: this.userForm.value.name,
        nickName: this.userForm.value.nickName,
        mail: this.userForm.value.mail,
        number: this.userForm.value.number
      });
    }
  }

  ngOnInit() {
    this.nickName?.valueChanges.subscribe(() => console.log(this.nickName))
  }
}
