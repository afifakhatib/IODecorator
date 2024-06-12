import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Itodos } from "../../models/todoItem.interface";





@Component({
    selector : 'app-todo-form',
    templateUrl : './todoForm.component.html',
    styleUrls : ['./todoForm.component.scss']
})
export class TodoFormComponent implements OnInit{
   
    @ViewChild('todoForm') todoForm !: NgForm

  @Output() emmitTodoData : EventEmitter<Itodos> =  new EventEmitter<Itodos>()

    constructor(){
    }

    ngOnInit(): void {
    }

    addTodo(todo : NgForm){
        if(todo.valid){
          // console.log(todo.value);
           let TodoData = this.todoForm.value;
           console.log(TodoData);
            // this.todoArray.unshift(data)
        //    console.log( this.todoArray);
           this.todoForm.reset()
           this.emmitTodoData.emit(TodoData)
        }  
      }


}