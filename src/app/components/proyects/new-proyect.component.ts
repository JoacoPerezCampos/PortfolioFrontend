import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyect } from 'src/app/model/proyect'
import { ProyectService } from 'src/app/service/proyect.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css']
})
export class NewProyectComponent implements OnInit{
  pName: string = "";
  pDescription: string = "";
  pImg1Url: string = "";
  pImg2Url: string = "";
  pImg3Url: string = "";
  pImg4Url: string = "";

  constructor(private proyectService: ProyectService, private router: Router){}
  
  ngOnInit(): void {

  }

  onCreate(): void{
    const proyect = new Proyect(this.pName, this.pDescription, this.pImg1Url, this.pImg2Url, this.pImg3Url, this.pImg4Url);
    this.proyectService.save(proyect).subscribe(data =>{
      alert("Proyecto Agregado");
      this.router.navigate(['']);
    }, err =>{
      alert("Falló");
      this.router.navigate(['']);
    })
  }
}
