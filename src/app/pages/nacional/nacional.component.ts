import { Component, OnInit } from '@angular/core';
import { LoteriaServicesService } from 'src/app/services/loteria-services.service';

@Component({
  selector: 'app-nacional',
  templateUrl: './nacional.component.html',
  styleUrls: ['./nacional.component.css']
})
export class NacionalComponent implements OnInit {
  data!: any;
  
  constructor(private svs: LoteriaServicesService) {
    this.svs.getLoteriaNacional().subscribe(l => {
       this.data = l.data;
    });
  }

  ngOnInit(): void {
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
