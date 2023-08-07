import {Component, OnInit} from '@angular/core';
import {Question} from "../square/components/model/question.interface";
import {QUESTIONS} from "../square/components/model/question.const";
import {interval} from "rxjs";
import {UserAnswerData} from "../square/components/model/userAnswerData.interface";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../../app/Service/user.service";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  questions: Question[] = QUESTIONS;
  userAnswerData: UserAnswerData | undefined;
  quizComplete: boolean = false;
  activeQuestionNumber: number = 0;
  correctAnswerCount: number = 0;
  inCorrectAnswerCount: number = 0;
  points: number = 0;
  interval$: any;
  countTimer: number = 20;
  userId: number | undefined;

  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit() {
    this.startCounter();

  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(value => {
      this.countTimer--;
      if (this.countTimer === 0) {
        this.activeQuestionNumber++;
        this.points -= 10;
        this.resetCounter()
      }
      setTimeout(() => this.interval$.unsubscribe(), 50000);
    })
  }

  checkQuestion(questionId: number) {
    if (questionId === this.questions[this.activeQuestionNumber].correctAnswerId) {
      this.correctAnswerCount++;
      this.points += 10;
      this.activeQuestionNumber++;
      this.resetCounter()
      if (this.activeQuestionNumber === this.questions.length) {
        this.endQuiz()
      }
    } else {
      this.points -= 10;
      this.inCorrectAnswerCount++
      this.activeQuestionNumber++;
      this.resetCounter()
      if (this.activeQuestionNumber === this.questions.length) {
        this.endQuiz()
      }
    }
  }

  stopCounter() {
    this.interval$.unsubscribe();
  }

  resetCounter() {
    this.stopCounter();
    this.countTimer = 20;
    this.startCounter();
  }

  endQuiz() {
    this.stopCounter();
    this.quizComplete = true;
  }

  passDataScore() {
    this.route.params.subscribe(params =>
      this.userId = +params['id']);
    this.userService.updateUserScore(this.userId, {
      score: this.points,
      correctAnswer: this.correctAnswerCount,
      incorrectAnswer: this.inCorrectAnswerCount
    });
  }

  changeUser(): void {
    this.passDataScore();
    this.navigateToHomePage();
  }

  private navigateToHomePage(): void {

  }


}
