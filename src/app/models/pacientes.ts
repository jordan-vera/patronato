export class Paciente {

    public IDPACIENTE: number;
    public IDGENERO: string;
    public IDPERSONA: string;
    public CONSULTAS_WEB: string;
    public FECHA_NACIMIENTO: string;
    public OBSERVACIONES: string;

    constructor(
        IDPACIENTE: number, 
        IDGENERO: string,
        IDPERSONA: string,
        CONSULTAS_WEB: string,
        FECHA_NACIMIENTO: string,
        OBSERVACIONES: string,
    ){
        this.IDPACIENTE = IDPACIENTE;
        this.IDGENERO = IDGENERO;
        this.IDPERSONA = IDPERSONA;
        this.CONSULTAS_WEB = CONSULTAS_WEB;
        this.FECHA_NACIMIENTO = FECHA_NACIMIENTO;
        this.OBSERVACIONES = OBSERVACIONES;
    }
}