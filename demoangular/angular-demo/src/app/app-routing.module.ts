import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaHomeComponent } from './paginas/pagina-home/pagina-home.component';
import { MostrarNoticiaComponent } from './paginas/mostrar-noticia/mostrar-noticia.component';
import { MostrarProductoComponent } from './paginas/mostrar-producto/mostrar-producto.component';

const routes: Routes = [
{path:"home",component:PaginaHomeComponent},
{path:"mostrar-noticia",component:MostrarNoticiaComponent},
{path:"mostrar-producto",component:MostrarProductoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
