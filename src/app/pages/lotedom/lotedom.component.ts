import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { LoandingService } from 'src/app/services/loanding.service';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-lotedom',
  templateUrl: './lotedom.component.html',
  styleUrls: ['./lotedom.component.css'],
})
export class LotedomComponent implements OnInit {
  data!: any;

  constructor(private svs: LoteriaServicesService) {}

  getSorteos(): any {
    this.svs.getLoteriaLoteDom().subscribe((l) => {
      this.data = l.data.sorteos;
    });
  }

  ngOnInit(): void {
    this.getSorteos();
  }
  
}
