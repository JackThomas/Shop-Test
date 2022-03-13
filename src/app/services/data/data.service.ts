import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public settings = {
    perPage: 10,
    subreddit: 'gifs',
    sort: '/hot',
  };
  public page = 1;

  constructor(private http: HttpClient) {}

  get(request: string = 'recommendeds'): Observable<any> {
    const url = `${environment.api.url}${request}`;

    return this.http.get(url).pipe(
      map((response: any) => {
        return response;
      }),
      catchError(this.errorHandler)
    );
  }

  post(request: string, data: any = {}): Observable<any> {
    const url = `${environment.api.url}${request}`;
    return this.http.post(url, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  put(request: string, data: any = {}): Observable<any> {
    const url = `${environment.api.url}${request}`;

    return this.http.put(url, data).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  delete(request: string): Observable<any> {
    const url = `${environment.api.url}${request}`;

    return this.http.delete(url).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  /**
   * errorHandler
   *
   * @param response
   *
   * @throws Server error
   */
  private errorHandler(response: any) {
    switch (response.status) {
      default:
        return throwError('Data not found');
        break;
    }
  }
}
