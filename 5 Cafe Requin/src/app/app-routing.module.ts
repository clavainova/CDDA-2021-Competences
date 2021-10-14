import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './page/accueil/accueil.component';
import { PromoComponent } from './page/promo/promo.component';
import { EtudiantsComponent } from './page/etudiants/etudiants.component';
import { EtudiantComponent } from './page/etudiant/etudiant.component';
import { ConnexionComponent } from './page/connexion/connexion.component';
import { ContactComponent } from './page/contact/contact.component';
import { AdminpanelComponent } from './page/adminpanel/adminpanel.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: "", component: AccueilComponent },
  { path: "promo", component: PromoComponent, canActivate: [AuthGuard] },
  { path: "etudiants", component: EtudiantsComponent },
  { path: "etudiant", component: EtudiantComponent },
  { path: "etudiant/:_id", component: EtudiantComponent },
  { path: "connexion", component: ConnexionComponent },
  { path: "contact", component: ContactComponent },
  { path: "adminpanel", component: AdminpanelComponent },
  {
    path: 'edition',
    loadChildren: () => import('./edition/edition.module').then(m => m.EditionModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

