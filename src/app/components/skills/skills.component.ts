import { Component, OnInit } from '@angular/core';
import { HsSkills } from 'src/app/model/hs-skills';
import { HsSkillsService } from 'src/app/service/hs-skills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  skill: HsSkills[] = [];

  constructor(private hsSkillsService: HsSkillsService, private tokenService: TokenService){ }
  isLogged = false;
  ngOnInit(): void {
    this.loadSkills();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  loadSkills():void{
    this.hsSkillsService.list().subscribe(data =>{
      this.skill = data
    })
  }

  delete(id: number){
    if(id != undefined){
      this.hsSkillsService.delete(id).subscribe(data =>{
        this.loadSkills();
      }, err =>{
        alert("No se pudo borrar la habilidad")
      })
    }
  }
}
