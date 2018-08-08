import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LambdaServiceService {

  constructor(private http: HttpClient) { }

  performAddition(numberOne: number, numberTwo: number) {
    const options = { headers: new HttpHeaders({'Content-Type': '/application/json'})};
    const url = `https://gc07tu65s6.execute-api.ap-southeast-2.amazonaws.com/prod/TP_AdditionLambda`;
    let numbers = {
      'num1': numberOne,
      'num2': numberTwo
    };
    return this.http.post(url, numbers, options);
  }
}
