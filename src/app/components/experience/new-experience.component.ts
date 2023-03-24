import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/service/experience.service';

@Component({
  selector: 'app-new-experience',
  templateUrl: './new-experience.component.html',
  styleUrls: ['./new-experience.component.css']
})
export class NewExperienceComponent implements OnInit{
  expName: string = "";
  expDescription: string = "";
  expImgUrl: string = "";

  constructor(private experienceService: ExperienceService, private router: Router){}

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const exp = new Experience(this.expName, this.expDescription, this.expImgUrl);
    this. experienceService.save(exp).subscribe(data =>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
