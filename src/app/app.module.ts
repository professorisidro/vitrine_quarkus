import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { ProductsessionComponent } from './productsession/productsession.component';
import { FooterComponent } from './footer/footer.component';
import { DepartamentoComponent } from './departamento/departamento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TitleComponent,
    ProductsessionComponent,
    FooterComponent,
    DepartamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
