import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiInterceptorInterceptor } from './interceptors/api-interceptor.interceptor';
import { MenuComponent } from './shared/menu/menu.component';
import { LotekaComponent } from './pages/loteka/loteka.component';
import { LeidsaComponent } from './pages/leidsa/leidsa.component';
import { ListaSorteosComponent } from './shared/lista-sorteos/lista-sorteos.component';
import { RealComponent } from './pages/real/real.component';
import { NacionalComponent } from './pages/nacional/nacional.component';
import { AnguilaComponent } from './pages/anguila/anguila.component';
import { KingLotteryComponent } from './pages/king-lottery/king-lottery.component';
import { AmericanasComponent } from './pages/americanas/americanas.component';
import { LaSuerteComponent } from './pages/la-suerte/la-suerte.component';
import { LotedomComponent } from './pages/lotedom/lotedom.component';
import { PrimeraComponent } from './pages/primera/primera.component';
import { ErrorsComponent } from './shared/errors/errors.component';
import { LoandingComponent } from './shared/loanding/loanding.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LotekaComponent,
    LeidsaComponent,
    ListaSorteosComponent,
    RealComponent,
    NacionalComponent,
    AnguilaComponent,
    KingLotteryComponent,
    AmericanasComponent,
    LaSuerteComponent,
    LotedomComponent,
    PrimeraComponent,
    ErrorsComponent,
    LoandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: ApiInterceptorInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
