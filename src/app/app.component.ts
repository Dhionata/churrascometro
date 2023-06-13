import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  qtdHomens!: number | null;
  qtdMulheres!: number | null;
  qtdPicanhaKg: number = 0;
  refriGarrafa2Lt: number = 0;

  calcular(): void {
    this.qtdPicanhaKg = 0.350 * (this.qtdHomens ?? 0) + 0.250 * (this.qtdMulheres ?? 0);
    this.refriGarrafa2Lt = Math.ceil((0.500 * (this.qtdHomens ?? 0) + 0.500 * (this.qtdMulheres ?? 0)) / 2);
  }

  resetar(): void {
    this.qtdHomens = null;
    this.qtdMulheres = null;
    this.qtdPicanhaKg = 0;
    this.refriGarrafa2Lt = 0;
  }
}