import { Component, OnInit } from '@angular/core';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-king-lottery',
  templateUrl: './king-lottery.component.html',
  styleUrls: ['./king-lottery.component.css']
})
export class KingLotteryComponent implements OnInit {
  data!: any;
  
  constructor(private svs: LoteriaServicesService) {
    this.svs.getLoteriaKingLottery().subscribe(l => {
       this.data = l.data.sorteos;
    });
  }

  ngOnInit(): void {
  }

}
