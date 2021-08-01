import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaHomeComponent } from './paginas/pagina-home/pagina-home.component';
import { MostrarNoticiaComponent } from './paginas/mostrar-noticia/mostrar-noticia.component';
import { MostrarProductoComponent } from './paginas/mostrar-producto/mostrar-producto.component';
import { AgregarUsuarioComponent } from './paginas/agregar-usuario/agregar-usuario.component';
import { LoginComponent } from './paginas/login/login.component';

const routes: Routes = [
{path:"home",component:PaginaHomeComponent},
{path:"mostrar-noticia",component:MostrarNoticiaComponent},
{path:"mostrar-producto",component:MostrarProductoComponent},
{path:"agregar-usuario",component:AgregarUsuarioComponent},
{ path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
