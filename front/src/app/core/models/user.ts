export class User {
    id: number;
    userName:string ;
    email:string ;
    password:string ;
    firstName:string ;
    lastName:string ;
    startDate: Date ;
    endDate:Date ;


constructor(id: number, userName:string,email:string, password:string,firstName:string,lastName:string,startDate: Date, endDate:Date)
{
    this.id = id;
    this.userName = userName;
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.startDate = startDate;
    this.endDate = endDate;
    

}


 //métodos de la clase
 new(){ };
 changeUsername(){ };
 changePassword(){ };
 resetPassword(){ };
 getRoles(){ };
}
