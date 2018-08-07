import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-call-addition-lambda',
  templateUrl: './call-addition-lambda.component.html',
  styleUrls: ['./call-addition-lambda.component.css']
})
export class CallAdditionLambdaComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  performAddition() {
    const options = { headers: new HttpHeaders({'Content-Type': '/application/json'})};
    const url = `https://gc07tu65s6.execute-api.ap-southeast-2.amazonaws.com/prod/TP_AdditionLambda`;
    let numbers = {
      'num1': 1,
      'num2': 3
    };
    this.http.post(url, numbers, options).subscribe(data => {
      console.log(+data);
    });
  }

}
