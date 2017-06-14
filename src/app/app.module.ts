import { MaterializeModule } from 'angular2-materialize';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { DelasartesComponent } from './delasartes/delasartes.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

import { AppRoutingModule } from './app-routing.module';
import { AgendaDetalleComponent } from './agenda/agenda-detalle/agenda-detalle.component';
import { AgendaempiezaComponent } from './agenda/agendaempieza/agendaempieza.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AgendaComponent,
    ConvocatoriasComponent,
    DelasartesComponent,
    NosotrosComponent,
    AgendaDetalleComponent,
    AgendaempiezaComponent,
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
