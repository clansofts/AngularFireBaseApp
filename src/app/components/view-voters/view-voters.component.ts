import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';


import {Registration} from '../../assets_shared/registration.service';
import {EnrovVoterModel} from '../../assets_shared/registration_model'

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-view-voters',
  templateUrl: './view-voters.component.html',
  styleUrls: ['./view-voters.component.scss']
})
export class ViewVotersComponent implements OnInit {

  voterList: EnrovVoterModel[];
  list: AngularFireList<any>;

  constructor(private regService:Registration) { 
    this.list=regService.getVoters();
  }
  
  ngOnInit() {

    var list=this.regService.getVoters();
    list.snapshotChanges().subscribe(item=>{
      this.voterList=[];
      item.forEach(element => {
        var data=element.payload.toJSON();
        data["$key"]=element.key;
        this.voterList.push(data as EnrovVoterModel);
        console.log(data,"My data object");
        
      });
      
    })
  }

}
