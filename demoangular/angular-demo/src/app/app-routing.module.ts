import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaHomeComponent } from './paginas/pagina-home/pagina-home.component';
import { MostrarNoticiaComponent } from './paginas/mostrar-noticia/mostrar-noticia.component';
import { MostrarProductoComponent } from './paginas/mostrar-producto/mostrar-producto.component';
import { AgregarUsuarioComponent } from './paginas/agregar-usuario/agregar-usuario.component';
import { AgregarProductoComponent } from './paginas/agregar-producto/agregar-producto.component';
import { LoginComponent } from './paginas/login/login.component';
import { AgregarNoticiaComponent } from './paginas/agregar-noticia/agregar-noticia.component';
import { ApoloPrincipalComponent } from './paginas/apolo-principal/apolo-principal.component';

const routes: Routes = [
{path:"home",component:PaginaHomeComponent},
{path:"agregar-noticia",component:AgregarNoticiaComponent},
{path:"mostrar-noticia",component:MostrarNoticiaComponent},
{path:"mostrar-producto",component:MostrarProductoComponent},
{path:"agregar-usuario",component:AgregarUsuarioComponent},
{path:"agregar-producto",component:AgregarProductoComponent},
{path:"apolo-principal",component:ApoloPrincipalComponent},
{ path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }