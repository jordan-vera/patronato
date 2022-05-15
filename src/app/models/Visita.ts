export class Visita {

    public IDVISITAS: number;
    public FECHAHISTORIA: string;
    public HORA: string;
    public NOMBREDIA: string;
    public TIPO: string;

    constructor(
        IDVISITAS: number,
        FECHAHISTORIA: string,
        HORA: string,
        NOMBREDIA: string,
        TIPO: string,
    ){
        this.IDVISITAS = IDVISITAS;
        this.FECHAHISTORIA = FECHAHISTORIA;
        this.HORA = HORA;
        this.NOMBREDIA = NOMBREDIA;
        this.TIPO = TIPO;
    }
}