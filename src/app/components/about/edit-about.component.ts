import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Person } from 'src/app/model/person.model';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit{
  person: Person = null;

  constructor(private personService: PersonService, private activatedRoute: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.detail(1).subscribe(data =>{
      this.person = data;
    }, err =>{
      alert("Error al cargar la persona");
      this.router.navigate(['']);
    })
  }
  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.personService.update(1, this.person).subscribe(data =>{
      this.person = data;
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar la persona");
      this.router.navigate(['']);
    })
  }

}
