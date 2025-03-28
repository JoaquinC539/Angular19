import { Component, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { UserService } from '../../services/user-service.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  imports: [MatIconModule,RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public user:string

  constructor(private userService:UserService){
    this.user=`${userService.getUser()["first_name"]} ${userService.getUser()["last_name"]}` 
  }
  handleLogOut(){
    console.log("loggout...")
  }
 


}
