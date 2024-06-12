import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  
  msgForChild : string = `Work Hard , Party Hard !!! ` 
  msgFromChild !: string;

  constructor() { }

  ngOnInit(): void {
  }

  GettingMsg(data : string){
    // console.log(data);
    this.msgFromChild = data
  }

}
