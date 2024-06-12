import { Component, ViewChild } from '@angular/core';
import { Itodos } from './shared/models/todoItem.interface';
import { Istds } from './shared/models/stdData.interface';
// import { NgForm } from '@angular/forms';
import { todoArr } from './shared/const/tododata';
import { stdArr } from './shared/const/stdData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IODecorator';

  // stdArray = stdArr
   
  stdArray : Array<Istds> = JSON.parse(localStorage.getItem('stds') || "[]");

  //  todoArray = todoArr

   todoArray : Array<Itodos> = JSON.parse(localStorage.getItem('todos') || "[]");

  constructor(){
  }

  onTodoEmmit(TodoData : Itodos){
    console.log(TodoData);
    this.todoArray.unshift(TodoData)
    localStorage.setItem('todos' , JSON.stringify(this.todoArray))
  }

  onStdEmmit(StdData : Istds){
      console.log(StdData);
      this.stdArray.unshift(StdData)
      localStorage.setItem('stds' , JSON.stringify(this.stdArray))
  }

}

