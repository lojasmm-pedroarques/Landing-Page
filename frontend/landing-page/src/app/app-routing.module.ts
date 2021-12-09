import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NossasPessoasComponent } from './views/nossas-pessoas/nossaspessoas.component';
import { VagasComponent } from './views/vagas/vagas.component';

const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
  {
  path: "nossas-pessoas",
  component: NossasPessoasComponent
},
  {
  path: "vagas",
  component: VagasComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
