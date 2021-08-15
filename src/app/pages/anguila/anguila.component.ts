import { Component, OnInit } from '@angular/core';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-anguila',
  templateUrl: './anguila.component.html',
  styleUrls: ['./anguila.component.css']
})
export class AnguilaComponent implements OnInit {
  data!: any;
  
  constructor(private svs: LoteriaServicesService) {
    this.svs.getLoteriaAnguila().subscribe(l => {
       this.data = l.data.sorteos;
    });
  }
  ngOnInit(): void {
  }

}
