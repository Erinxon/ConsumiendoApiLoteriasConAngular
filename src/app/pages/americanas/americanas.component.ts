import { Component, OnInit } from '@angular/core';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-americanas',
  templateUrl: './americanas.component.html',
  styleUrls: ['./americanas.component.css']
})
export class AmericanasComponent implements OnInit {
  data!: any;
  
  constructor(private svs: LoteriaServicesService) {
    this.svs.getLoteriaAmericanas().subscribe(l => {
       this.data = l.data.sorteos;
    });
  }

  ngOnInit(): void {
  }

}
