import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { LoandingService } from 'src/app/services/loanding.service';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-nacional',
  templateUrl: './nacional.component.html',
  styleUrls: ['./nacional.component.css']
})
export class NacionalComponent implements OnInit {
  data!: any;
  sorteosEspeciales!: any[];

  constructor(private svs: LoteriaServicesService, private errorService: ErrorService,
    private loandingService: LoandingService) {
    
  }

  getSorteos(): any {
    this.loandingService.setLoanding(true);
    this.svs.getLoteriaNacional().subscribe(l => {
      this.data = l.data.sorteos;
      this.sorteosEspeciales = l.data.sorteoEspeciales;
      this.loandingService.setLoanding(false);
   }, error => {
     this.errorService.setError({IsError: true, Message: 'Error al obtener los datos'});
     this.loandingService.setLoanding(false);
   });
  }

  ngOnInit(): void {
    this.getSorteos();
  }

  
  IsCurrentDate(data: string): boolean {
    const dateCurrent = this.getFormattedDate(new Date())
    return  dateCurrent === data;
  }

  private getFormattedDate(date: Date): string { 
    let year  = date.getFullYear();
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let day   = date.getDate().toString().padStart(2, "0");
    let dateFormated = day + '/' + month + '/' + year;
    dateFormated = dateFormated.replace(/\//g, '-');
    return dateFormated;
  }


}
