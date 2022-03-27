import { MaterialModule } from './../core/material/material.module';
import { AlimentoCadastroModule } from './alimento-cadastro/alimento-cadastro.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlimentoRoutingModule } from './alimento-routing.module';
import { AlimentoComponent } from './alimento.component';

@NgModule({
  declarations: [
    AlimentoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    AlimentoCadastroModule,
    AlimentoRoutingModule
  ]
})
export class AlimentoModule { }
