import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatQuestionComponent} from "./creat-question.component";

const routes: Routes = [
  {path: "", component:CreatQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreatQuestionRoutingModule { }
