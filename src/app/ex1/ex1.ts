import { Component } from "@angular/core";
import { NgIf } from "@angular/common";

@Component({
  imports: [NgIf],
  selector: "app-ex1",
  styleUrl: "./ex1.css",
  templateUrl: "./ex1.html",
})
export class Ex1 {
  mensagemVisivel = false;

  alternarMensagem() {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}