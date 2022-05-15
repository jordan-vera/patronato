export class Persona {

    public IDPERSONA: number;
    public IDCANTON: number;
    public NOMBRES: string;
    public IDENTIFICACION: string;
    public CELULAR: string;
    public EMAIL: string;
    public DIRECCION: string;

    constructor(
        IDPERSONA: number,
        IDCANTON: number,
        NOMBRES: string,
        IDENTIFICACION: string,
        CELULAR: string,
        EMAIL: string,
        DIRECCION: string,
    ){
        this.IDPERSONA = IDPERSONA;
        this.IDCANTON = IDCANTON;
        this.NOMBRES = NOMBRES;
        this.IDENTIFICACION = IDENTIFICACION;
        this.CELULAR = CELULAR;
        this.EMAIL = EMAIL;
        this.DIRECCION = DIRECCION;
    }
}