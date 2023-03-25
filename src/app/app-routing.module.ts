import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './components/about/edit-about.component';
import { EditEducationComponent } from './components/education/edit-education.component';
import { NewEducationComponent } from './components/education/new-education.component';
import { EditExperiencesComponent } from './components/experience/edit-experience.component';
import { NewExperienceComponent } from './components/experience/new-experience.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditProyectComponent } from './components/proyects/edit-proyect.component';
import { NewProyectComponent } from './components/proyects/new-proyect.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'newExp', component: NewExperienceComponent},
  {path:'expUpdate/:id', component: EditExperiencesComponent},
  {path:'newEd', component: NewEducationComponent},
  {path:'edUpdate/:id', component: EditEducationComponent},
  {path:'newSkill', component: NewSkillsComponent},
  {path:'skillUpdate/:id', component: EditSkillsComponent},
  {path:'personUpdate/:id', component: EditAboutComponent},
  {path:'proyectUpdate/:id', component: EditProyectComponent},
  {path:'newProyect', component: NewProyectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
