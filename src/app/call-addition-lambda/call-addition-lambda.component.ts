import { Component, OnInit } from '@angular/core';
import { LambdaServiceService } from '../shared/lambda-service.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-call-addition-lambda',
  templateUrl: './call-addition-lambda.component.html',
  styleUrls: ['./call-addition-lambda.component.css']
})
export class CallAdditionLambdaComponent implements OnInit {
  callAdditionForm: FormGroup;

  constructor(private lambdaService: LambdaServiceService) { }

  ngOnInit() {
    this.callAdditionForm = new FormGroup({});
  }

  performAddition() {
    this.lambdaService.performAddition().subscribe(data => {
      console.log(+data);
    });
  }

}
