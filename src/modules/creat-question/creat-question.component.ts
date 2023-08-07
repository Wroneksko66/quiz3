import { Component } from '@angular/core';
import {Question} from "../square/components/model/question.interface";
import {FormControl, FormGroup} from "@angular/forms";
import {QUESTIONS} from "../square/components/model/question.const";

@Component({
  selector: 'app-creat-question',
  templateUrl: './creat-question.component.html',
  styleUrls: ['./creat-question.component.scss']
})
export class CreatQuestionComponent {
   question:Question[] = QUESTIONS;

   questionForm = new FormGroup({
     question: new FormControl(),
     answer1: new FormControl(),
     answer2: new FormControl(),
     answer3: new FormControl(),
     answer4: new FormControl(),
     correctAnswer: new FormControl(),
   })

  saveQuestion(){
    const formData = this.questionForm.getRawValue()
    const questionData:Question = {
      question: formData.question,
      answers : [
        {
          label: formData.answer1,
          id: 1
        },
        {label: formData.answer2,
        id:2
        },
        {label: formData.answer3,
        id:3},
        {label: formData.answer4,
        id:4}
      ],

      correctAnswerId: formData.correctAnswer
    }
    this.question.push(questionData);
  }
}
