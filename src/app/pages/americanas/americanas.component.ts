import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { LoandingService } from 'src/app/services/loanding.service';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-americanas',
  templateUrl: './americanas.component.html',
  styleUrls: ['./americanas.component.css']
})
export class AmericanasComponent implements OnInit {
  data!: any;

  constructor(private svs: LoteriaServicesService, private errorService: ErrorService,
    private loandingService: LoandingService) {
    
  }

  getSorteos(): any {
    this.loandingService.setLoanding(true);
    this.svs.getLoteriaAmericanas().subscribe(l => {
      this.data = l.data.sorteos;
      this.loandingService.setLoanding(false);
   }, error => {
    this.errorService.setError({IsError: true, Message: 'Error al obtener los datos'});
     this.loandingService.setLoanding(false);
   });
  }

  ngOnInit(): void {
    this.getSorteos();
  }
}
