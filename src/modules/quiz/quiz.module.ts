import { NgModule } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { QuizRoutingModule } from './quiz-routing.module';
import { QuizComponent } from './quiz.component';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
@NgModule({
  declarations: [
    QuizComponent,
  ],
  imports: [
    CommonModule,
    QuizRoutingModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgOptimizedImage
  ]
})
export class QuizModule { }
