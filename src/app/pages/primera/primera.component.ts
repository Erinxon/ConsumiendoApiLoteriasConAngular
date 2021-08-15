import { Component, OnInit } from '@angular/core';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-primera',
  templateUrl: './primera.component.html',
  styleUrls: ['./primera.component.css']
})
export class PrimeraComponent implements OnInit {
  data!: any;
  
  constructor(private svs: LoteriaServicesService) {
    this.svs.getLoteriaPrimera().subscribe(l => {
       this.data = l.data.sorteos;
    });
  }

  ngOnInit(): void {
  }

}
