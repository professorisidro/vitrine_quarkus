import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { ProductsessionComponent } from './productsession/productsession.component';
import { DepartamentoComponent } from './departamento/departamento.component';


const routes: Routes = [
  { path: '', component: TitleComponent },
  { path: 'produtos', component: ProductsessionComponent },
  { path: 'home', component: TitleComponent },
  { path: 'departamentos', component: DepartamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
