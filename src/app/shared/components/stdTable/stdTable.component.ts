import { Component, Input, OnInit } from "@angular/core";
import { Istds } from "../../models/stdData.interface";




@Component({
    selector : 'app-stdTable',
    templateUrl : './stdTable.component.html',
    styleUrls : ['./stdTable.component.scss']
})
export class StdTableComponent implements OnInit{

   @Input() getStdArray : Array<Istds> = [
    
   ]

    constructor(){
        
    }
    ngOnInit(): void {
    }
}