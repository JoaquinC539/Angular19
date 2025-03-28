import { Component, effect } from '@angular/core';
import { SignalService } from '../../services/signal.service';
import { ScreenLoaderComponent } from "../../components/screen-loader/screen-loader.component";
import { UserService } from '../../services/user-service.service';

@Component({
  selector: 'app-signal',
  imports: [ScreenLoaderComponent],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.scss'
})
export class SignalComponent {

  public data:{[key:string]:string|number|boolean}[]=[]
  public updated:boolean=false;
  public loading:boolean=true;
  constructor(private signalService:SignalService){
    effect(()=>{
      if(signalService.Data.length>0){
        this.data=signalService.Data
        this.loading=false;
      }  
    })
    
  }
  updateUsers(){
    this.loading=true;
    const data= !this.updated ? [
      {
        id:"2",
        name:"John Doe",
        description:"John user mock"
      },
      {
        id:"3",
        name:"George Lucas",
        description:"Lucas user mock"
      },
      
    ]:
    [{
      id:"1",
      name:"Steven Spiegal",
      description:"Steven user mock"
    }]
    this.updated=!this.updated
    
    this.signalService.updateData(data);
    
  }
  

}
