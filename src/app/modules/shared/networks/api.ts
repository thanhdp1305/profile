import { Injectable } from '@angular/core';
import {
  HttpParams,
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { getAccessToken } from '../commons/cache-store';

@Injectable({
  providedIn: 'root',
})
export class Api {
  responseType = {
    blob: 'blob',
    arraybuffer: 'arraybuffer',
    json: 'json',
    text: 'text',
    none: '',
  };

  constructor(
    private http: HttpClient,
    private route: Router
  ) {}

  get language() {
    return localStorage.getItem('lang') ?? '';
  }

  /**
   * Lấy thông tin token từ cookie
   * @returns Token: string
   */
  getToken() {
    return getAccessToken();
  }

  /**
   * Get method
   * @param url
   */
  get(url: string, queryParams: any = null) {
    const header: any = {
      'Content-Type': 'application/json',
    };
    if (queryParams) {
      const qrParams = new HttpParams();
      Object.keys(queryParams).forEach((key) => {
        qrParams.append(key, queryParams[key]);
      });
      console.log(qrParams.toString());
      header.params = qrParams;
    }
    return this.http
      .get(environment.apiUrl + url, this.optionsRequest(header, false))
      .pipe(catchError(this.handleError));
  }

  /**
   * Post method
   * @param url
   * @param data
   */
  post(url: string, data: any) {
    const header = {
      'Content-Type': 'application/json',
    };
    data = JSON.stringify(data);
    return this.http
      .post(environment.apiUrl + url, data, this.optionsRequest(header, false))
      .pipe(catchError(this.handleError));
  }

  /**
   * POST multipath
   * @param url
   * @param data
   */
  postMultiPart(url: string, data: FormData) {
    return this.http
      .post(
        environment.apiUrl + url,
        data,
        this.optionsRequest({}, false, 'blob')
      )
      .pipe(catchError(this.handleError));
  }

  /**
   * POST multipath
   * @param url
   * @param data
   */
  postMultiPartJSON(url: string, data: FormData) {
    return this.http
      .post(environment.apiUrl + url, data, this.optionsRequest())
      .pipe(catchError(this.handleError));
  }

  /**
   * Put method
   * @param url
   * @param data
   */
  put(url: string, data: string) {
    const header = {
      'Content-Type': 'application/json',
    };
    data = JSON.stringify(data);
    return this.http
      .put(environment.apiUrl + url, data, this.optionsRequest(header, false))
      .pipe(catchError(this.handleError));
  }

  /**
   * PUT multipart
   * @param url
   * @param data
   */
  putMultiPart(url: string, data: FormData) {
    return this.http
      .put(environment.apiUrl + url, data, this.optionsRequest())
      .pipe(catchError(this.handleError));
  }

  /**
   * Delete method
   * @param url
   */
  delete(url: string, param = '') {
    const token = this.getToken();

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + token,
        'Accept-Language': this.language,
      }),
      body: JSON.stringify(param),
    };

    return this.http
      .delete(environment.apiUrl + url + url, options)
      .pipe(catchError(this.handleError));
  }

  optionsRequest(
    headers: any = {},
    reportProgress?: boolean,
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text' | '',
    body: any = null
  ) {
    const token = this.getToken();
    const header = {
      Authorization: token ? `Bearer ` + token : ``,
      'Cache-Control': 'no-cache',
      Pragma: 'no-cache',
      'Accept-Language': this.language,
      ...headers,
    };
    const options: any = { headers: new HttpHeaders(header) };

    if (reportProgress == true) {
      options['reportProgress'] = true;
    }

    if (
      responseType != '' &&
      responseType != null &&
      responseType != undefined
    ) {
      options['responseType'] = responseType;
    }

    if (body != null) {
      options['body'] = JSON.stringify(body);
    }

    return options;
  }

  /**
   * Handle Error
   * @param error
   * @returns
   */
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error?.status}, ` + `body was: ${error?.error}`
      );
    }

    if (error?.error?.message == 'ECT-00001110') {
      localStorage.clear();
      this?.route?.navigate(['/auth/signin']);
    }

    // return an observable with a user-facing error message
    return throwError(() => error);
    // 'Something bad happened; please try again later.');
  }

  /**
   * Download file
   * @param url
   */
  download(url: string) {
    return this.http
      .get(environment.apiUrl + url, this.optionsRequest({}, false, 'blob'))
      .pipe(catchError(this.handleError));
  }
}
