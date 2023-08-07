import {Question} from "./question.interface";

export const QUESTIONS: Question[] = [
  {
    question: "What is a Capital of Poland?",
    answers: [
      {label: 'Warsaw', id: 0},
      {label:'Knurów', id:1},
      {label:'Olesno', id:2},
      {label:'Klepaczow', id:3}
    ], correctAnswerId: 0
  },
  {
    question: "What is a Capital of Lower Silesia?",
    answers: [
      {label: 'Oborniki', id: 0},
      {label:'Wroclaw', id:1},
      {label:'Cycow', id:2},
      {label:'Biskupin', id:3}
    ], correctAnswerId: 1
  },  {
    question: "Który z podanych osób jest fizykiem",
    answers: [
      {label: 'A.Dragan', id: 0},
      {label:'S.Lem', id:1},
      {label:'L.Wałęsa', id:2},
      {label:'D.Tusk', id:3}
    ], correctAnswerId: 0
  },  {
    question: "Skąd pochodzi Tomasz Kopyra ",
    answers: [
      {label: 'Oborniki', id: 0},
      {label:'Wroclaw', id:1},
      {label:'Piwo', id:2},
      {label:'Biskupin', id:3}
    ], correctAnswerId: 0
  },  {
    question: "Ile jest 2+2",
    answers: [
      {label: '2', id: 0},
      {label:'3', id:1},
      {label:'1000', id:2},
      {label:'4', id:3}
    ], correctAnswerId: 3
  },  {
    question: "Ile procent tluszczu zawiera dobrej jakoci maslo",
    answers: [
      {label: '83%', id: 0},
      {label:'23%', id:1},
      {label:'Nie zawiera ', id:2},
      {label:'120%', id:3}
    ], correctAnswerId: 0
  },
]
