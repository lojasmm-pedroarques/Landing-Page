import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SobreComponent } from './views/sobre/sobre.component';
import { NossasPessoasComponent } from './views/nossas-pessoas/nossas-pessoas.component';
import { VagasComponent } from './views/vagas/vagas.component';

const routes: Routes = [
  {
  path: "",
  component: SobreComponent
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
