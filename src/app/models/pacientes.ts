export class Paciente {

    public idpaciente: number;
    public cedula: string;
    public nombres: string;
    public direccion: string;
    public celular: string;
    public telefono: string;
    public email: string;

    constructor(
        idpaciente: number, 
        cedula: string,
        nombres: string,
        direccion: string,
        celular: string,
        telefono: string,
        email: string
    ){
        this.idpaciente = idpaciente;
        this.cedula = cedula;
        this.nombres = nombres;
        this.direccion = direccion;
        this.celular = celular;
        this.telefono = telefono;
        this.email = email;
    }
}