import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

 @Input() getMsgFromParent !: string 

msgForParent : string = `I will Work Hard !!!`

@Output()  emmitMsgEvent : EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    this.emmitMsgEvent.emit(this.msgForParent)
  }

}
