import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SearchComponent } from './componentes/search/search.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'busqueda', component: SearchComponent},
  {path:'**',  pathMatch:'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
