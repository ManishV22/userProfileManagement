import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-single-drop-down',
  templateUrl: './single-drop-down.component.html',
  styleUrls: ['./single-drop-down.component.scss']
})
export class SingleDropDownComponent implements OnInit {
  @Input() option1: [];
  @Output() shareSelectedVal = new EventEmitter();
  selectedVal: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  selectedValue(){
    debugger;
    // this.selectedVal = e.target.value;
    this.shareSelectedVal.emit(this.selectedVal);
  }
}