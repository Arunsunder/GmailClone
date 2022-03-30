import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  shareData$: Observable<any>;
  private subject = new Subject<any>();


  constructor() {
    this.shareData$ = this.subject.asObservable();
  }

  shareData(data: any) {
    this.subject.next(data);
  }
}
