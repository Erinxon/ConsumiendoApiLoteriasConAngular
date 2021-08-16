import { Component, OnInit } from '@angular/core';
import { LoandingService } from 'src/app/services/loanding.service';

@Component({
  selector: 'app-loanding',
  templateUrl: './loanding.component.html',
  styleUrls: ['./loanding.component.css']
})
export class LoandingComponent implements OnInit {
  isLoanding: boolean = false;
  constructor(private loandingService: LoandingService) { 
    this.loandingService.getLoanding().subscribe( l => this.isLoanding = l);
  }

  ngOnInit(): void {
  }

}
