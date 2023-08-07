import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path:'' , loadChildren:() => import('../modules/square/square.module').then(m => m.SquareModule)},
  {path:'quiz', loadChildren:() => import('../modules/quiz/quiz.module').then(m =>  m.QuizModule)},
  {path:'createQuestion', loadChildren:() => import('../modules/creat-question/creat-question.module').then(m => m.CreatQuestionModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
