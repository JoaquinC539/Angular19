import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, firstValueFrom, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: { [key: string]: any } = {}
  private usersList: { [key: string]: any } = {}
  private initSubject: Subject<boolean> = new BehaviorSubject<boolean>(false);
  public initialized = this.initSubject.asObservable()

  constructor(private http: HttpClient) {
    this.initialize();
  }
  private async initialize(): Promise<void> {
    try {
      console.log("stating init")
      await this.fetchUser();
      await this.fetchUsers();
      setTimeout(()=>{
        this.initSubject.next(true);
      console.log("initialized");
      },500)
      
      
    } catch (error) {
      console.error("error in init", error);
    }
  }

  private async fetchUser(): Promise<void> {
    
    const data: any = await firstValueFrom(this.http.get("https://reqres.in/api/users/2"));
    this.user = data["data"]

  }
  private async fetchUsers(): Promise<void> {

    
    const data: any = await firstValueFrom(this.http.get("https://reqres.in/api/users?page=2"));
    this.usersList = data["data"];
  }
  public getUser() {
    return this.user;
  }
  public getUserList() {
    return this.usersList;
  }


}
