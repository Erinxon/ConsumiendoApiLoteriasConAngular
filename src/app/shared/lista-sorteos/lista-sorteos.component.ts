import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-sorteos',
  templateUrl: './lista-sorteos.component.html',
  styleUrls: ['./lista-sorteos.component.css']
})
export class ListaSorteosComponent implements OnInit {
  @Input() listaSorteos!: any;

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
