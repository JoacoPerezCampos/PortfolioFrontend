import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect';
import { ProyectService } from 'src/app/service/proyect.service';

@Component({
  selector: 'app-edit-proyect',
  templateUrl: './edit-proyect.component.html',
  styleUrls: ['./edit-proyect.component.css']
})
export class EditProyectComponent implements OnInit {
  proyect: Proyect = null;

  constructor(private proyectService: ProyectService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectService.detail(id).subscribe(data => {
      this.proyect = data;
    }, err => {
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.proyectService.update(id, this.proyect).subscribe(data =>{
      this.router.navigate(['']);
    }, err =>{
      alert("Error al modificar el proyecto");
      this.router.navigate(['']);
    })
  }
}



