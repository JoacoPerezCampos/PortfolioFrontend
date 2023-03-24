import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-edit-experiences',
  templateUrl: './edit-experiences.component.html',
  styleUrls: ['./edit-experiences.component.css']
})
export class EditExperiencesComponent implements OnInit{
  exp: Experience = null;

  constructor(private experienceService: ExperienceService, private activatedRoute: ActivatedRoute, private router: Router){

  }
  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(data =>{
        this.exp = data;
      }, err => {
        alert("Error al modificar la experiencia laboral");
        this.router.navigate(['']);
      })
  }
  
  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.update(id, this.exp).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar la experiencia laboral");
      this.router.navigate(['']);
    })
  }

}
