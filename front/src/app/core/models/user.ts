import { Role } from "./role";

export class User {
    id: number;
    userName: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    startDate: Date;
    endDate: Date;
    roles: Array<Role>;


    constructor(
        id: number,
        userName: string, 
        email: string, 
        password: string, 
        firstName: string, 
        lastName: string,)
    {
        this.id = id;
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
    }


 //métodos de la clase
    changeUsername(newUserName: string): void { this.userName = newUserName };
    changePassword(oldPassword: string, newPassword: string): void {
    if(newPassword === oldPassword) {
        throw new Error(`Password cannot be de same`);
    }

    this.password = newPassword;

    // posteriormente se envia la instancia de esta clase hacia el service que actualiza
    // la informacion del usuario
    };
    
    resetPassword(){ };
    getRoles(): Array<Role> { return this.roles; };
}
