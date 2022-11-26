import { Component, OnInit } from '@angular/core';

import firebase from 'firebase/compat/app'
import { LoginService } from './login/login.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{


constructor(private loginService:LoginService){




}
  ngOnInit(): void {
   
    firebase.initializeApp({

      apiKey: "AIzaSyAyn1SwdecmS5Hk2MgIoREvToxPsGerprQ",

      authDomain: "mis-clientes-e105f.firebaseapp.com",



    });


  }

  estaLogueado(){

    return this.loginService.estaLogueado();

  }

  logout(){

    this.loginService.logout();

  }

}
