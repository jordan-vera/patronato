export class Canton {

    public IDCANTON: number;
    public IDPROVINCIA: number;
    public CANTON: string;

    constructor(
        IDCANTON: number,
        IDPROVINCIA: number,
        CANTON: string
    ){
        this.IDCANTON = IDCANTON;
        this.IDPROVINCIA = IDPROVINCIA;
        this.CANTON = CANTON;
    }
}