import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  qtdHomens: number = 0;
  qtdMulheres: number = 0;
  qtdPicanhaKg: number = 0;
  refriGarrafa2Lt: number = 0;

  calcular(): void {
    this.qtdPicanhaKg = 0.350 * this.qtdHomens + 0.250 * this.qtdMulheres;
    this.refriGarrafa2Lt = Math.ceil((0.500 * this.qtdHomens + 0.500 * this.qtdMulheres) / 2);
  }
}