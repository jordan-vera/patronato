export class Medico {

    public IDMEDICO: number;
    public IDPERSONA: number;
    public IDESPECIALIDAD: number;
    public CARGO: string;
    public OBSERVACIONES: string;
    public CANTIDAD_ATENCIONES: number;

    constructor(
        IDMEDICO: number,
        IDPERSONA: number,
        IDESPECIALIDAD: number,
        CARGO: string,
        OBSERVACIONES: string,
        CANTIDAD_ATENCIONES: number
    ) {
        this.IDMEDICO = IDMEDICO;
        this.IDPERSONA = IDPERSONA;
        this.IDESPECIALIDAD = IDESPECIALIDAD;
        this.CARGO = CARGO;
        this.OBSERVACIONES = OBSERVACIONES;
        this.CANTIDAD_ATENCIONES = CANTIDAD_ATENCIONES;
    }
}