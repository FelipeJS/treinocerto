export interface Alimento {
  id: number;
  del: boolean;
  nome: string;
  dataCadastro: Date;
  medida: string;
  kcal: number;
  carboidrato: number;
  proteina: number;
  gordura: number;
  sodio: number;
}
