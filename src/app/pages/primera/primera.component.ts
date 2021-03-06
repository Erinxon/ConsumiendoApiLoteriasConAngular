import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { LoandingService } from 'src/app/services/loanding.service';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-primera',
  templateUrl: './primera.component.html',
  styleUrls: ['./primera.component.css'],
})
export class PrimeraComponent implements OnInit {
  data!: any;

  constructor(private svs: LoteriaServicesService) {}

  getSorteos(): any {
    this.svs.getLoteriaPrimera().subscribe((l) => {
      this.data = l.data.sorteos;
    });
  }

  ngOnInit(): void {
    this.getSorteos();
  }
}
