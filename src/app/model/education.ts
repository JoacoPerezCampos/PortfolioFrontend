export class Education {
    id?: number;
    edName: string;
    edDescription: string;
    edImgUrl: string;

    constructor(edName: string, edDescription: string, edImgUrl: string){
        this.edName = edName;
        this.edDescription = edDescription;
        this.edImgUrl = edImgUrl;
    }
}
