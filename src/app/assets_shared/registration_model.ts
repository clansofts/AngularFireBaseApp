export class EnrovVoterModel {
    $key:String;
    fullname:String;
    phoneno:String;
    email:String;
    dob:Date;
    postal:String;
    info:String;
    ward:String;
    ward_code:String;
    polling:String;
    constituency:String;
    constituency_code:String;
    county:String;
    county_code:String;
    nationality:String;
    Passport_photo:String;
    Passport_upload:String;
    Passport_file:String;
    id_name:String;
    id_file:File;

    name:string;
    url:string;
    progress:number;
    createdAt: Date = new Date();

    constructor(id_file:File, Obj:any) {
        this.id_file = id_file;
        /* this.firstname=firstname;
        this.lastname=lastname;
        this.surname=lastname;
        this.phoneno=lastname;
        this.email=lastname;
        this.dob=dob;
        this.postal=postal; */
      }

      
    
    
}

