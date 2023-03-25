import { Component, OnInit } from '@angular/core';
import { Proyect } from 'src/app/model/proyect';
import { ProyectService } from 'src/app/service/proyect.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.css']
})
export class ProyectsComponent implements OnInit {
  proyect: Proyect[] = [];

  constructor(private proyectService: ProyectService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.loadProyect();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  loadProyect(): void{
    this.proyectService.list().subscribe(data => {
      (this.proyect = data)
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.proyectService.delete(id).subscribe(data => {
        this.loadProyect();
      }, err =>{
        alert("No pudo borrarse")
      })
    }
  }
}
