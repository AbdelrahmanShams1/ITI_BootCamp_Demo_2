import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginAppService {
  private isAdminSubject = new BehaviorSubject<boolean>(false); 
  private isLoginSubject = new BehaviorSubject<boolean>(false); 
  isAdmin: Observable<boolean> = this.isAdminSubject.asObservable();
  isLogin: Observable<boolean> = this.isLoginSubject.asObservable();

  constructor() {}

  setAdminStatus(isAdmin: boolean): void {
    this.isAdminSubject.next(isAdmin);
  }

 
  getAdminStatus(): boolean {
    return this.isAdminSubject.getValue();
  }

  setLogin(isLogin: boolean): void {
    this.isLoginSubject.next(isLogin);
  }

  getLogin():boolean{
    return this.isLoginSubject.getValue();
  }
}
