export class Enfermera {

    public IDENFERMERA: number;
    public IDPERSONA: number;
    public CARGO: string;
    public OBSERVACION: string;
    public ATENCIONES: string;

    constructor(
        IDENFERMERA: number,
        IDPERSONA: number,
        CARGO: string,
        OBSERVACION: string,
        ATENCIONES: string,
    ){
        this.IDENFERMERA = IDENFERMERA;
        this.IDPERSONA = IDPERSONA;
        this.CARGO = CARGO;
        this.OBSERVACION = OBSERVACION;
        this.ATENCIONES = ATENCIONES;
    }
}