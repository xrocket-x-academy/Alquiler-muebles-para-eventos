export class Role {

    id: number;
    name:string;
    descripcion:string ;
    startDate: Date ;
    endDate:Date ;

    constructor(id: number, name:string, descripcion:string, startDate: Date, endDate:Date)
{
    this.id = id;
    this.name = name;
    this.descripcion = descripcion;   
    this.startDate = startDate;
    this.endDate = endDate;
    };


   //métodos de la clase
   new(){ };

}
