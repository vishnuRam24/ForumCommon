import { Component, OnInit } from '@angular/core';
import { NgModel, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-askquestion',
  templateUrl: './askquestion.component.html',
  styleUrls: ['./askquestion.component.css']
})
export class AskquestionComponent implements OnInit {

  askQuestion: FormGroup;
  keywords: string[];



  constructor() { }

  ngOnInit() {
    this.askQuestion = new FormGroup({
      question: new FormControl(),
      keywords: new FormControl(),
      implementation: new FormControl()

    });
  }
  onSubmit() {
    console.log(this.askQuestion.value);
    this.checkKeyWords(this.askQuestion.value.keywords);

  }
  checkKeyWords(keyword: string) {
    this.keywords = keyword.split(";");
    console.log(this.keywords);

  }

}
