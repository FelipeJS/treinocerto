import { AlimentoCadastroModalComponent } from './alimento-cadastro-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/core/material/material.module';

@NgModule({
  declarations: [
    AlimentoCadastroModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class AlimentoCadastroModalModule { }
