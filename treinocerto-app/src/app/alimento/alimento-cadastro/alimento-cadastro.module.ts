import { AlimentoCadastroModalModule } from './alimento-cadastro-modal/alimento-cadastro-modal.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './../../core/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlimentoCadastroComponent } from './alimento-cadastro.component';

@NgModule({
  declarations: [
    AlimentoCadastroComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AlimentoCadastroModalModule
  ]
})
export class AlimentoCadastroModule { }
