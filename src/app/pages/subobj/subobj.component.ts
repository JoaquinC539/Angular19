import { Component, OnDestroy } from '@angular/core';
import { ScreenLoaderComponent } from '../../components/screen-loader/screen-loader.component';
import { data, SubobjService } from '../../services/subobj.service';
import { error } from 'console';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subobj',
  imports: [ScreenLoaderComponent],
  templateUrl: './subobj.component.html',
  styleUrl: './subobj.component.scss'
})
export class SubobjComponent implements OnDestroy {
  public data:{[key:string]:string|number|boolean}[]=[]
  public updated:boolean=false;
  public loading:boolean=true;
  private datasub:Subscription
  constructor(private subobjService:SubobjService){
   this.datasub= subobjService.data$.subscribe({
      next:(data)=>{this.data=data;this.loading=false;},
      error:(err:any)=>{console.error(err)}
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
    this.subobjService.updateData(data)
  }
  ngOnDestroy(): void {
      this.datasub.unsubscribe();
  }
  
  
}
