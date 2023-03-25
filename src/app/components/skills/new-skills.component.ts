import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HsSkills } from 'src/app/model/hs-skills';
import { HsSkillsService } from 'src/app/service/hs-skills.service';

@Component({
  selector: 'app-new-skills',
  templateUrl: './new-skills.component.html',
  styleUrls: ['./new-skills.component.css']
})
export class NewSkillsComponent implements OnInit {
  hsName: string;
  percent: number;

  constructor(private hsSkillsService: HsSkillsService, private router: Router){}
  ngOnInit(): void {
    
  }
  onCreate():void{
    const skill = new HsSkills(this.hsName, this.percent);
    this.hsSkillsService.save(skill).subscribe(data =>{
      alert("Habilidad creada");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló al añadir la habilidad");
      this.router.navigate([''])
    }
    )
  }
}
