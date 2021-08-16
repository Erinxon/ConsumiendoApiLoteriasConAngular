import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoandingService } from 'src/app/services/loanding.service';

@Component({
  selector: 'app-loanding',
  templateUrl: './loanding.component.html',
  styleUrls: ['./loanding.component.css']
})
export class LoandingComponent implements OnInit, OnDestroy {
  isLoanding: boolean = false;
  suscription!: Subscription;

  constructor(private loandingService: LoandingService) { 
    this.suscription = this.loandingService.getLoanding().subscribe( l => this.isLoanding = l);
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
