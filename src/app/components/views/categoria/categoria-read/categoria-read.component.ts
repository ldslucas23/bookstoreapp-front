import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {
 
  categorias: Categoria[] = []

  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros', 'acoes'];
 
  constructor(private service: CategoriaService) { }

  //Sempre que a aplicação iniciar esse método é chamado
  ngOnInit(): void {
    this.findAll()
  }

  findAll(){
    //Quando retornar a categoria salvo ela em um array
    this.service.findAll().subscribe(resposta => {
      console.log(resposta)
      this.categorias = resposta;
    })
  }

}
