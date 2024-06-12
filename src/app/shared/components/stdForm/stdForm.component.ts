import { Component, EventEmitter, OnInit, Output, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Istds } from "../../models/stdData.interface";





@Component({
    selector : 'app-stdForm',
    templateUrl : './stdForm.component.html',
    styleUrls : ['./stdform.component.scss']
})
export class StdFormComponent implements OnInit{

  @ViewChild('stdForm') stdForm !: NgForm;

   constructor(){
    
   }
    ngOnInit(): void {
    }

   @Output() emmitstdData : EventEmitter<Istds> = new EventEmitter<Istds>()

    onAddStd(stdInfo : NgForm){
        if(stdInfo.valid){
          console.log(stdInfo);
          // console.log(stdInfo.value);
          let stdData = stdInfo.value;
          console.log(stdData);
        //   this.stdArray.unshift(data)
        this.stdForm.reset()
        this.emmitstdData.emit(stdData)
        }    
    }
}