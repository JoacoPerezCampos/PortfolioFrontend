export class Experience {
    id?: number;
    expName: string;
    expDescription: string;
    expImgUrl: string;

    constructor(expName: string, expDescription: string, expImgUrl: string){
        this.expName = expName;
        this.expDescription = expDescription;
        this.expImgUrl = expImgUrl;
    }
}
