import { Component, Input, OnInit } from "@angular/core";
import { Itodos } from "../../models/todoItem.interface";




@Component({
    selector : 'app-todo-list',
    templateUrl : './todoList.component.html',
    styleUrls : ['./todoList.component.scss']
})
export class TodoListComponent implements OnInit{
    
   @Input() gettodoArray !: Array<Itodos> 

    constructor(){

    }
    ngOnInit(): void {
    }
}