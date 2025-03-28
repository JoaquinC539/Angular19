import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
export type data={[key:string]:string|number|boolean}[]
@Injectable({
  providedIn: 'root'
})
export class SubobjService {
  public dataSubject=new Subject<data>();
  public data$=this.dataSubject.asObservable();
  constructor() { 
    this.init();
  }

  fetchUser(){
    return new Promise<data>((resolve)=>{
      setTimeout(()=>{
        resolve([{
          id:"1",
          name:"Steven Spiegal",
          description:"Steven user mock"
        }])
      },3000)
    })
  }
  init(){
    this.fetchUser().then((data)=>{
      setTimeout(()=>{this.dataSubject.next(data)},2500)
    })
  }
  updateData(data:data){
    setTimeout(()=>{
      this.dataSubject.next(data);
    },2500)
  }
}
