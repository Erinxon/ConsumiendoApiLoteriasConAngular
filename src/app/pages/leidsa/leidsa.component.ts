import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { LoandingService } from 'src/app/services/loanding.service';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-leidsa',
  templateUrl: './leidsa.component.html',
  styleUrls: ['./leidsa.component.css'],
})
export class LeidsaComponent implements OnInit {
  data!: any;

  constructor(private svs: LoteriaServicesService) {}

  getSorteos(): any {
    this.svs.getLoteriaLeidsa().subscribe((l) => {
      this.data = l.data.sorteos;
    });
  }

  ngOnInit(): void {
    this.getSorteos();
  }
}
