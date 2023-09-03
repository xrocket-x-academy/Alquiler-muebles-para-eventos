import { Role } from "./role";

export class User {
    id: number;
    username: string;
    email: string;
    password: string;
    first_name: string;
    last_name: string;
    startDate: Date;
    endDate: Date;
    roles: Array<Role>;


    constructor(
        username?: string, 
        email?: string, 
        password?: string, 
        firstName?: string, 
        lastName?: string,)
    {
        this.username = username;
        this.email = email;
        this.password = password;
        this.first_name = firstName;
        this.last_name = lastName;
    }


 //métodos de la clase
    changeUsername(newUserName: string): void { this.username = newUserName };
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
