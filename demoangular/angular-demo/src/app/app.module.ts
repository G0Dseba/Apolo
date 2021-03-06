import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaHomeComponent } from './paginas/pagina-home/pagina-home.component';
import { NavBarComponent } from './paginas/nav-bar/nav-bar.component';
import {FormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import localeES from "@angular/common/locales/es";

import {ButtonModule} from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {InputTextModule} from 'primeng/inputtext';
import { MostrarNoticiaComponent } from './paginas/mostrar-noticia/mostrar-noticia.component';
import { MostrarProductoComponent } from './paginas/mostrar-producto/mostrar-producto.component';
import { FooterComponent } from './paginas/footer/footer.component';
import { AgregarUsuarioComponent } from './paginas/agregar-usuario/agregar-usuario.component';
import {CardModule} from 'primeng/card';
import { LoginComponent } from './paginas/login/login.component';
import {MessagesModule} from 'primeng/messages'; 
import {MessageModule} from 'primeng/message';
import { AgregarNoticiaComponent } from './paginas/agregar-noticia/agregar-noticia.component';
import {DataViewModule} from 'primeng/dataview';
import { AgregarProductoComponent } from './paginas/agregar-producto/agregar-producto.component';
import { ApoloPrincipalComponent } from './paginas/apolo-principal/apolo-principal.component';
@NgModule({
  declarations: [
    AppComponent,
    PaginaHomeComponent,
    NavBarComponent,
    MostrarNoticiaComponent,
    MostrarProductoComponent,
    FooterComponent,
    AgregarUsuarioComponent,
    LoginComponent,
    AgregarNoticiaComponent,
    AgregarProductoComponent,
    ApoloPrincipalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    BrowserAnimationsModule,
    NgbModule,
    ButtonModule,
    DynamicDialogModule,
    DialogModule,
    InputTextModule,
    InputTextareaModule,
    FileUploadModule,
    CardModule,
    MessagesModule,
    MessageModule,
    DataViewModule,
    MultiSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }