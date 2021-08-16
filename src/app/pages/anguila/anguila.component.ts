import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { LoandingService } from 'src/app/services/loanding.service';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-anguila',
  templateUrl: './anguila.component.html',
  styleUrls: ['./anguila.component.css'],
})
export class AnguilaComponent implements OnInit {
  data!: any;

  constructor(private svs: LoteriaServicesService) {}

  getSorteos(): any {
    this.svs.getLoteriaAnguila().subscribe((l) => {
      this.data = l.data.sorteos;
    });
  }

  ngOnInit(): void {
    this.getSorteos();
  }
}
