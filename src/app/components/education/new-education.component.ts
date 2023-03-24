import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';
import { ExperienceService } from 'src/app/service/experience.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.css']
})
export class NewEducationComponent implements OnInit {
  edName: string = "";
  edDescription: string = "";
  edImgUrl: string = "";

  constructor(private educationService: EducationService, private router: Router){}
  
  ngOnInit(): void {
    
  }

  onCreate(): void{
    const ed = new Education(this.edName, this.edDescription, this.edImgUrl);
    this.educationService.save(ed).subscribe(data =>{
      alert("Educación agregada");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }

}
