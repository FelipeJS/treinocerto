
import { collection, collectionData, Firestore, addDoc  } from '@angular/fire/firestore';
import { Alimento } from './../core/model/alimento';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlimentoService {

  item$: Observable<Alimento[]>;
  collection: any;

  constructor(private firestore: Firestore) {
    this.collection = collection(firestore, 'alimento');
    this.item$ = collectionData(this.collection);
  }

  salvarAlimento(alimento: Alimento) {
    addDoc(this.collection, alimento);
  }

  buscarAlimentos(): Observable<Alimento[]> {
    return this.item$;
  }
}
