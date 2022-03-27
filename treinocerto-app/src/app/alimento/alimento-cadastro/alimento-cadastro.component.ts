import { AlimentoService } from './../alimento.service';
import { AlimentoCadastroModalComponent } from './alimento-cadastro-modal/alimento-cadastro-modal.component';
import { Alimento } from './../../core/model/alimento';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-alimento-cadastro',
  templateUrl: './alimento-cadastro.component.html',
  styleUrls: ['./alimento-cadastro.component.css']
})
export class AlimentoCadastroComponent implements OnInit {
  displayedColumns = ['nome', 'kcal', 'carboidrato', 'proteina', 'gordura', 'sodio', 'acoes'];
  alimentos: Alimento[] = [];

  resultsLength = 0;
  isLoadingResults = false;
  isRateLimitReached = false;

  constructor(public dialog: MatDialog, private alimentoService: AlimentoService) { }

  ngOnInit(): void {
    this.buscar();
  }

  buscar() {
    this.isLoadingResults = true;
    this.alimentoService.buscarAlimentos().subscribe(alimentos => {
      this.alimentos = alimentos;
      this.isLoadingResults = false;
    });
  }

  openDialog(alimento?: Alimento): void {
    const dialogRef = this.dialog.open(AlimentoCadastroModalComponent, {
      width: '1150px',
      data: alimento
    });

    dialogRef.afterClosed().subscribe((alimentoSalvar: Alimento) => {
      if (alimentoSalvar) {
        this.isLoadingResults = true;
        this.salvar(alimentoSalvar);
      }
    });
  }

  salvar(alimento: Alimento) {
    this.alimentoService.salvarAlimento(alimento);
    this.buscar();
  }
}
