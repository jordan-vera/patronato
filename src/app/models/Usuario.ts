export class Usuario {

    public IDUSUARIO: number;
    public IDPERSONA: number;
    public USERNICK: string;
    public PASSWORD: string;
    public TIPOUSER: string;

    constructor(
        IDUSUARIO: number,
        IDPERSONA: number,
        USERNICK: string,
        PASSWORD: string,
        TIPOUSER: string
    ){
        this.IDUSUARIO = IDUSUARIO;
        this.IDPERSONA = IDPERSONA;
        this.USERNICK = USERNICK;
        this.PASSWORD = PASSWORD;
        this.TIPOUSER = TIPOUSER;
    }
}