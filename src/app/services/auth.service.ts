import { Injectable } from '@angular/core';
import { User } from '../user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

public login(user:User){
  localStorage.setItem("ACCESS_TOKEN","access_token")

}

}
