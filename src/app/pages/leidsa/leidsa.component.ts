import { Component, OnInit } from '@angular/core';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-leidsa',
  templateUrl: './leidsa.component.html',
  styleUrls: ['./leidsa.component.css']
})
export class LeidsaComponent implements OnInit {
  data!: any;
  
  constructor(private svs: LoteriaServicesService) {
    this.svs.getLoteriaLeidsa().subscribe(l => {
       this.data = l.data.sorteos;
    });
  }

  ngOnInit(): void {
  }

}
