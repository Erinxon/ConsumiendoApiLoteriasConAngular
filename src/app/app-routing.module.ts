import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmericanasComponent } from './pages/americanas/americanas.component';
import { AnguilaComponent } from './pages/anguila/anguila.component';
import { KingLotteryComponent } from './pages/king-lottery/king-lottery.component';
import { LaSuerteComponent } from './pages/la-suerte/la-suerte.component';
import { LeidsaComponent } from './pages/leidsa/leidsa.component';
import { LotedomComponent } from './pages/lotedom/lotedom.component';
import { LotekaComponent } from './pages/loteka/loteka.component';
import { NacionalComponent } from './pages/nacional/nacional.component';
import { PrimeraComponent } from './pages/primera/primera.component';
import { RealComponent } from './pages/real/real.component';

const routes: Routes = [
 { path: '', redirectTo: 'nacional', pathMatch: 'full' },
 { path: 'loteka', component: LotekaComponent },
 { path: 'leidsa', component: LeidsaComponent },
 { path: 'real', component: RealComponent},
 { path: 'nacional', component: NacionalComponent},
 { path: 'laPrimera', component: PrimeraComponent},
 { path: 'loteDom', component: LotedomComponent},
 { path: 'laSuerte', component: LaSuerteComponent},
 { path: 'americanas', component: AmericanasComponent},
 { path: 'anguila', component: AnguilaComponent},
 { path: 'KingLottery', component: KingLotteryComponent},
 {path: '**', redirectTo: 'nacional'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
