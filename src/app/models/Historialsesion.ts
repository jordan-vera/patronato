export class Historialsesion {

    public IDHISTORIALSESION: number;
    public IDUSUARIO:number;
    public FECHAHORASESION: string;

    constructor(
        IDHISTORIALSESION: number,
        IDUSUARIO: number,
        FECHAHORASESION: string
    ) {
        this.IDHISTORIALSESION = IDHISTORIALSESION;
        this.IDUSUARIO = IDUSUARIO;
        this.FECHAHORASESION = FECHAHORASESION;
    }
}