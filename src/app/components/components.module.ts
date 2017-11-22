import { NgModule } from '@angular/core';




// Forms Component

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';



// Modal Component
import { ModalModule } from 'ngx-bootstrap/modal';


// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';


// Components Routing
import { ComponentsRoutingModule } from './components-routing.module';
import { register_voter } from './register_voter.component';
import {NgForm} from '@angular/forms'
import {FormsModule} from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase} from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import 'firebase/storage';

import {Registration} from '../assets_shared/registration.service';
import { ViewVotersComponent } from './view-voters/view-voters.component'


export const firebaseConfig = {
  apiKey: "AIzaSyBKloVWp7F_Ey8U-qN705qP7kI3GGXVL8c",
  authDomain: "voterregister-4e137.firebaseapp.com",
  databaseURL: "https://voterregister-4e137.firebaseio.com",
  projectId: "voterregister-4e137",
  storageBucket: "voterregister-4e137.appspot.com",
  messagingSenderId: "575894015044"
  }; 

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    CommonModule,
   
    
  ],
  providers: [AngularFireDatabase, Registration],
  
  declarations: [
   
    register_voter,
    ViewVotersComponent,
    
  ]
})
export class ComponentsModule { }
