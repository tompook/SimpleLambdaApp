import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LambdaServiceService } from '../shared/lambda-service.service';

@Component({
  selector: 'app-call-addition-lambda',
  templateUrl: './call-addition-lambda.component.html',
  styleUrls: ['./call-addition-lambda.component.css']
})
export class CallAdditionLambdaComponent implements OnInit {

  constructor(private http: HttpClient,
              private lambdaService: LambdaServiceService) { }

  ngOnInit() {
  }

  performAddition() {
    this.lambdaService.performAddition().subscribe(data => {
      console.log(+data);
    });
  }

}
