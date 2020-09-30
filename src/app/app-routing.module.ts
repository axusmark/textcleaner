import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LimpiadorEspaciosComponent} from './limpiador-espacios/limpiador-espacios.component';


const routes: Routes = [{path:"",component:LimpiadorEspaciosComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
