import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent implements OnInit{
  @Input() text: string = "hello world";
  @Input() color: string = 'green';
  @Input() array: any;
  @Input() object: any;
  @Input() other: any;
  @Output() btnClick = new EventEmitter()

  onClick(){
    this.btnClick.emit()
  }

  constructor() {}

  ngOnInit(): void {}

}
