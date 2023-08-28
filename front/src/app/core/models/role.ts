export class Role {
    id: number;
    name: string;
    descripcion: string;
    startDate: Date;
    endDate: Date;

    constructor(id: number, name: string, descripcion: string) {
    this.id = id;
    this.name = name;
    this.descripcion = descripcion;
    };
}
