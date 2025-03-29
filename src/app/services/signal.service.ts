import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  private data=signal<{[key:string]:string|number|boolean}[]>([]);

  constructor() { 
    this.init();
  }
  get Data(){
    return this.data();
  }

  fetchUser(){
    return new Promise<{[key:string]:string|number|boolean}[]>((resolve)=>{
      setTimeout(()=>{
        resolve([{
          id:"1",
          name:"Steven Spiegal",
          description:"Steven user mock"
        }])
      },3000)
    })
  }
  async init (){
    const data=await this.fetchUser();
     this.data.set(data);
  }
  updateData(data:{[key:string]:string|number|boolean}[]){
    setTimeout(()=>{
      this.data.update(_=>data);
    },2500)
    
  }
}
