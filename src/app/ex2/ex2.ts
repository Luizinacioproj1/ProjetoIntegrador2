import { Component } from "@angular/core";

@Component({
  imports: [],
  selector: "app-ex2",
  styleUrl: "./ex2.css",
  templateUrl: "./ex2.html",
})
export class Ex2 {
  usuarioLogado = false;

  entrarSair() {
    this.usuarioLogado = !this.usuarioLogado;
  }
}