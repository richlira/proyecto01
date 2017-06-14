import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { ConvocatoriasComponent } from './convocatorias/convocatorias.component';
import { DelasartesComponent } from './delasartes/delasartes.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { AgendaDetalleComponent } from './agenda/agenda-detalle/agenda-detalle.component';
import { AgendaempiezaComponent } from './agenda/agendaempieza/agendaempieza.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component : HomeComponent },
  { path: 'nosotros', component : NosotrosComponent },
  { path: 'agendacultural', component: AgendaComponent, children:[
    { path: '', component: AgendaempiezaComponent },
    { path: ':id', component: AgendaDetalleComponent }
]  },
  { path: 'convocatorias', component: ConvocatoriasComponent },
  { path: 'feriadelasartes', component: DelasartesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule{

}
