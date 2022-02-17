import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmcreateComponent } from './components/filmcreate/filmcreate.component';
import { FilmdetailsComponent } from './components/filmdetails/filmdetails.component';
import { FilmlistComponent } from './components/filmlist/filmlist.component';

const routes: Routes = [
  {path:'', redirectTo:'list', pathMatch : 'full'},
  {path:'list', component : FilmlistComponent},
  {path:'details/:id', component : FilmdetailsComponent},
  {path:'create', component : FilmcreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
