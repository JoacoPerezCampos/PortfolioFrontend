export class Proyect {
    id?: number;
    pName: string;
    pDescription: string;
    pImg1Url: string;
    pImg2Url: string;
    pImg3Url: string;
    pImg4Url: string;

    constructor(pName: string, pDescription: string, pImg1Url: string, pImg2Url: string, pImg3Url: string, pImg4Url: string) {
        this.pName = pName;
        this.pDescription = pDescription;
        this.pImg1Url = pImg1Url;
        this.pImg2Url = pImg2Url;
        this.pImg3Url = pImg3Url;
        this.pImg4Url = pImg4Url;


    }
}
