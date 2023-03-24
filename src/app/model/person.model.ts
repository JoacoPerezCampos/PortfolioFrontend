export class Person{
    id?:number;
    name:string;
    lastname:string;
    profileImgUrl:string;
    about: string;

    constructor(name: string, lastname: string, profileImgUrl: string, about: string){
        this.name = name;
        this.lastname = lastname;
        this.profileImgUrl = profileImgUrl;
        this.about = about;
        
    }
}