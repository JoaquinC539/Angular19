import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { ScreenLoaderComponent } from './components/screen-loader/screen-loader.component';
import { UserService } from './services/user-service.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MenuTabsComponent } from './components/menu-tabs/menu-tabs.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ScreenLoaderComponent,CommonModule,MenuTabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit,OnDestroy {

  title = 'Miniwork';
  loading: boolean 
  userData: any;
  private sub :Subscription | undefined

  constructor(private userService: UserService) {
    this.loading=true;

  }
  ngOnInit(): void {
    this.sub= this.userService.initialized.subscribe((isInit) => {
      console.log("isInit",isInit)
      if (isInit) {
        this.loading = false;
      }
    }
    )
  }
  ngOnDestroy(): void {
      this.sub?.unsubscribe();
  }
  

}
