
import { Injectable } from '@angular/core';
import { AngularFireDatabase,AngularFireList} from 'angularfire2/database';
import * as firebase from 'firebase/app';
import 'firebase/storage';



import {EnrovVoterModel} from './registration_model'

@Injectable()
export class Registration {

  enrollDb:AngularFireList<any>;
  //enrollUserModel:EnrovVoterModel = new EnrovVoterModel();
  
  constructor(private db:AngularFireDatabase) {
   this.enrollDb=this.db.list('/votersreg');
   }

   private basePath:string = '/uploads';
   private basePathtoDb:string = '/votersreg';
   uploads: AngularFireList<EnrovVoterModel[]>;
   private  saveFileUrl;
   private saveFileName;
   
   selectedVoter:EnrovVoterModel=new EnrovVoterModel(null,null);
   public pushUpload(upload: EnrovVoterModel) {
    
     console.log("file content  content *******  ",upload)
     this.saveFileUrl=upload.url;
     this.saveFileName=upload.id_file.name;
     let storageRef = firebase.storage().ref();
     let uploadTask = storageRef.child(`${this.basePath}/${upload.id_file.name}`).put(upload.id_file);
     uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
       (snapshot) =>  {
         // upload in progress
        // upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
       },
       (error) => {
         // upload failed
         console.log(error)
       },
       () => {
         // upload success
         upload.url = uploadTask.snapshot.downloadURL
         upload.name = upload.id_file.name
        


        //this.saveFileData(upload)
       }
     );
   }
 
   public saveFileData(upload: EnrovVoterModel) {
     

     let saveData={
      //Passport_photo :upload.Passport_photo,
     // Passport_uplaod :upload.Passport_upload,
     constituency  :upload.constituency,
      //constituency_code :upload.constituency_code,
      county:upload.county,
      //county_Code:upload.county_code,
      dob:upload.dob,
      email:upload.email,
      firstname:upload.fullname,
      phoneno:upload.phoneno,
      postal:upload.postal,
      ward:upload.ward,
      polling:upload.polling,
      
      uploadfilename:this.saveFileName,
      url:this.saveFileName
      

     }
     console.log("upload content ==---------------   ",saveData);
    return this.db.list(`${this.basePathtoDb}/`).push(saveData);
   }
 

public getVoters(){
 return this.enrollDb;
}

public insertVoter(voter:EnrovVoterModel){
  //this.enrollDb.push(voter);
}

}
