import { Component, OnInit } from '@angular/core';
import { ErrorService } from 'src/app/services/error.service';
import { LoandingService } from 'src/app/services/loanding.service';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-la-suerte',
  templateUrl: './la-suerte.component.html',
  styleUrls: ['./la-suerte.component.css']
})
export class LaSuerteComponent implements OnInit {
  data!: any;
  
  constructor(private svs: LoteriaServicesService) {
    
  }

  getSorteos(): any {
    this.svs.getLoteriaLaSuerte().subscribe(l => {
      this.data = l.data.sorteos;
   });
  }

  ngOnInit(): void {
    this.getSorteos();
  }
}
