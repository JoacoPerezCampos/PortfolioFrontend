import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HsSkills } from 'src/app/model/hs-skills';
import { HsSkillsService } from 'src/app/service/hs-skills.service';

@Component({
  selector: 'app-edit-skills',
  templateUrl: './edit-skills.component.html',
  styleUrls: ['./edit-skills.component.css']
})
export class EditSkillsComponent implements OnInit{
  skill: HsSkills;

  constructor(private hsSkillService: HsSkillsService, private activatedRoute: ActivatedRoute, private router: Router){}
  

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.hsSkillService.detail(id).subscribe(data =>{
      this.skill = data;
    }, err =>{
      alert("Error al modificar");
      this.router.navigate(['']);
    })
  }

  onUpdate(){
    const id = this.activatedRoute.snapshot.params[('id')];
    this.hsSkillService.update(id, this.skill).subscribe( data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Falló al modificar la habilidad");
      this.router.navigate(['']);
    })
  }

}
