import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css']
})
export class EditEducationComponent implements OnInit{
  ed: Education = null;

  constructor(private educationService: EducationService, private auctivatedRoute: ActivatedRoute, private router: Router){

  }


  ngOnInit(): void {
    const id = this.auctivatedRoute.snapshot.params['id'];
    this.educationService.detail(id).subscribe(data =>{
      this.ed = data;
    }, err =>{
      alert("Error al modificar la educación");
      this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id = this.auctivatedRoute.snapshot.params['id'];
    this.educationService.update(id, this.ed).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar la educación");
      this.router.navigate(['']);
    })
  }
}
