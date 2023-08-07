import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreatQuestionRoutingModule } from './creat-question-routing.module';
import { CreatQuestionComponent } from './creat-question.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatRadioModule} from "@angular/material/radio";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    CreatQuestionComponent
  ],
  imports: [
    CommonModule,
    CreatQuestionRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    FormsModule
  ]
})
export class CreatQuestionModule { }
