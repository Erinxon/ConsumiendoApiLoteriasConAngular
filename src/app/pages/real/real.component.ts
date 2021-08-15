import { Component, OnInit } from '@angular/core';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-real',
  templateUrl: './real.component.html',
  styleUrls: ['./real.component.css']
})
export class RealComponent implements OnInit {
  data!: any;
  
  constructor(private svs: LoteriaServicesService) {
    this.svs.getLoteriaReal().subscribe(l => {
       this.data = l.data.sorteos;
    });
  }

  ngOnInit(): void {
  }


}
