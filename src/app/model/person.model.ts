export class person{
    id?:number;
    name:string;
    lastname:string;
    profileImgUrl:string;

    constructor(name: string, lastname: string, profileImgUrl: string){
        this.name = name;
        this.lastname = lastname;
        this.profileImgUrl = profileImgUrl;
    }
}