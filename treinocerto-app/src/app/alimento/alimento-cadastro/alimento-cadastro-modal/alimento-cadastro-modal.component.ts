import { Alimento } from './../../../core/model/alimento';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-alimento-cadastro-modal',
  templateUrl: './alimento-cadastro-modal.component.html',
  styleUrls: ['./alimento-cadastro-modal.component.css']
})
export class AlimentoCadastroModalComponent implements OnInit {

  alimentoForm = this.fb.group({
    id: [''],
    del: [''],
    nome: [''],
    dataCadastro: [{ value: '', disabled: true }],
    medida: ['', Validators.required],
    kcal: ['', Validators.required],
    carboidrato: ['', Validators.required],
    proteina: ['', Validators.required],
    gordura: ['', Validators.required],
    sodio: ['', Validators.required]
  });

  carregando = false;

  constructor(
    public dialogRef: MatDialogRef<AlimentoCadastroModalComponent>,
    @Inject(MAT_DIALOG_DATA) public alimento: Alimento,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    if (this.alimento) {
      this.preencheralimento(this.alimento);
    }
  }

  preencheralimento(alimento: Alimento): void {
    this.alimentoForm.controls.id.setValue(alimento.id);
    this.alimentoForm.controls.del.setValue(alimento.del);
    this.alimentoForm.controls.nome.setValue(alimento.nome);
    this.alimentoForm.controls.dataCadastro.setValue(alimento.dataCadastro);
    this.alimentoForm.controls.medida.setValue(alimento.medida);
    this.alimentoForm.controls.kcal.setValue(alimento.kcal);
    this.alimentoForm.controls.carboidrato.setValue(alimento.carboidrato);
    this.alimentoForm.controls.proteina.setValue(alimento.proteina);
    this.alimentoForm.controls.gordura.setValue(alimento.gordura);
    this.alimentoForm.controls.sodio.setValue(alimento.sodio);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  compareObjects(o1: any, o2: any): boolean {
    return (o1?.id === o2?.id);
  }
}
