import { AlimentoCadastroComponent } from './alimento-cadastro/alimento-cadastro.component';
import { AlimentoComponent } from './alimento.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AlimentoComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cadastro'
      },
      {
        path: 'cadastro',
        component: AlimentoCadastroComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlimentoRoutingModule { }
