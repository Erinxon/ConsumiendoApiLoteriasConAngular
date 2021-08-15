import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoteriaServicesService {


  constructor(private http: HttpClient) { }


  getLoteriaLoteka(): Observable<any> {
    return this.http.get('/api/Loterias/loteka');
  }

  getLoteriaLeidsa(): Observable<any> {
    return this.http.get('/api/Loterias/leidsa');
  }

  getLoteriaReal(): Observable<any> {
    return this.http.get('/api/Loterias/real');
  }

  getLoteriaNacional(): Observable<any> {
    return this.http.get('/api/Loterias/nacional');
  }

  getLoteriaAnguila(): Observable<any> {
    return this.http.get('/api/Loterias/anguila');
  }

  getLoteriaPrimera(): Observable<any> {
    return this.http.get('/api/Loterias/primera');
  }

  getLoteriaLoteDom(): Observable<any> {
    return this.http.get('/api/Loterias/loteDom');
  }

  getLoteriaLaSuerte(): Observable<any> {
    return this.http.get('/api/Loterias/laSuerte');
  }

  getLoteriaAmericanas(): Observable<any> {
    return this.http.get('/api/Loterias/americanas');
  }

  getLoteriaKingLottery(): Observable<any> { 
    return this.http.get('/api/Loterias/kingLottery');
  }

}
