import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ProdcutComponent } from './pages/prodcut/prodcut.component';


const routes: Routes = [
  {path: '', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item', component: ProdcutComponent},
  {path: '**', pathMatch: 'full' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
