import { Component } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent {
  notas = {
    titulo: "AAAAA",
    conteudo: "TESTE",
    tipo: "tipo1"
  }

}
