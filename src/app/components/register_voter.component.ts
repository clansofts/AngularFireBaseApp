import { Component, OnInit } from '@angular/core';

import {NgForm} from '@angular/forms'

import {Registration} from '../assets_shared/registration.service';
import {EnrovVoterModel} from '../assets_shared/registration_model';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Component({
  selector: 'app-components',
  templateUrl: './register_voter.component.html',
  styleUrls: ['./register_voter.component.scss'],
  providers:[Registration],
})
export class register_voter implements OnInit {

  selectedFiles: FileList;
  currentUpload: EnrovVoterModel ;

  constructor(public voterService:Registration) { }

  ngOnInit() {
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
}
uploadSingle(voter:EnrovVoterModel) {
  console.log("current upload=========== ",EnrovVoterModel);
  let file = this.selectedFiles.item(0)
  this.currentUpload = new EnrovVoterModel(file,voter);
  this.voterService.pushUpload(this.currentUpload);
  console.log("current upload ",this.currentUpload);
}

  onSubmit(form : NgForm){
    console.log("form content ============== ",form.value);
    this.uploadSingle(form.value)
      this.voterService.saveFileData(form.value);
  
   
   
  }


}
