import { Component, OnInit } from '@angular/core';
import { ErrorModel } from 'src/app/Models/ErrorModel';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {
  error!: ErrorModel;

  constructor(private errorService: ErrorService) { 
    this.errorService.getError().subscribe(error => {
      this.error = error;
      setTimeout(() => this.errorService.setError({IsError: false, Message: ''}), 4000);
    });
  }

  ngOnInit(): void {
  }

  clearError(): void {
    this.errorService.setError({IsError: false, Message: ''});
  }

}
