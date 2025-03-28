import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-screen-loader',
  imports: [],
  templateUrl: './screen-loader.component.html',
  styleUrl: './screen-loader.component.scss'
})
export class ScreenLoaderComponent implements OnChanges{
  @Input() loading:boolean=false; 
  _loading:boolean=false;

  constructor(){
   
    this.init()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("change")
      if(changes["loading"]){
        this._loading=changes["loading"].currentValue;
      }
  }
  init(){
    console.log(this.loading)
  }
}
