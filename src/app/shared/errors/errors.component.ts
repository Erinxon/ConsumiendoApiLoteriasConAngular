import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ErrorModel } from 'src/app/Models/ErrorModel';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css'],
})
export class ErrorsComponent implements OnInit, OnDestroy {
  error!: ErrorModel;
  suscription!: Subscription;

  constructor(private errorService: ErrorService) {
    this.suscription = this.errorService.getError().subscribe((error) => {
      this.error = error;
    });
  }
  ngOnDestroy(): void {
    this.suscription.unsubscribe();
  }

  ngOnInit(): void {}

  clearError(): void {
    this.errorService.setError({ IsError: false, Message: '' });
  }
}
