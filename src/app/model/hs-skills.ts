export class HsSkills {
    id: number;
    hsName: string;
    percent: number;

    constructor(hsName:string, percent: number){
        this.hsName = hsName;
        this.percent = percent;
    }
}
