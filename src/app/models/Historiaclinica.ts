export class Historiaclinica {

    public IDHISTORIA: number;
    public IDENFERMERA: number;
    public IDPACIENTE: number;
    public FECHAHISTORIA: string;
    public PESO: string;
    public ALTURA: string;
    public PRESION_ARTERIAL: string;

    constructor(
        IDHISTORIA: number,
        IDENFERMERA: number,
        IDPACIENTE: number,
        FECHAHISTORIA: string,
        PESO: string,
        ALTURA: string,
        PRESION_ARTERIAL: string,
    ) {
        this.IDHISTORIA = IDHISTORIA;
        this.IDENFERMERA = IDENFERMERA;
        this.IDPACIENTE = IDPACIENTE;
        this.FECHAHISTORIA = FECHAHISTORIA;
        this.PESO = PESO;
        this.ALTURA = ALTURA;
        this.PRESION_ARTERIAL = PRESION_ARTERIAL;
    }
}