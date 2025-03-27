import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {MatTabsModule} from "@angular/material/tabs"

@Component({
  selector: 'app-menu-tabs',
  imports: [RouterLink,MatTabsModule,RouterLinkActive],
  templateUrl: './menu-tabs.component.html',
  styleUrl: './menu-tabs.component.scss'
})
export class MenuTabsComponent {

}
