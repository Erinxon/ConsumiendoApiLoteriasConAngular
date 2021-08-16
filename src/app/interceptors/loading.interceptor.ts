import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoandingService } from '../services/loanding.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  constructor(private loandingService: LoandingService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loandingService.setLoanding(true);
    return next.handle(request).pipe(
      finalize(() => this.loandingService.setLoanding(false))
    );
  }
}
