import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistaComponent } from './componentes/artista/artista.component';
import { HomeComponent } from './componentes/home/home.component';
import { PruebasComponent } from './componentes/pruebas/pruebas.component';
import { SearchComponent } from './componentes/search/search.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'busqueda', component: SearchComponent},
  {path:'artista/:id', component: ArtistaComponent},
  {path:'pruebas', component: PruebasComponent},
  {path:'**',  pathMatch:'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
