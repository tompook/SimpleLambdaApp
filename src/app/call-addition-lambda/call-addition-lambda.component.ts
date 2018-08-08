import { Component, OnInit } from '@angular/core';
import { LambdaServiceService } from '../shared/lambda-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-call-addition-lambda',
  templateUrl: './call-addition-lambda.component.html',
  styleUrls: ['./call-addition-lambda.component.css']
})
export class CallAdditionLambdaComponent implements OnInit {
  callAdditionForm: FormGroup;
  numberOne: FormControl;
  numberTwo: FormControl;
  numberResult: FormControl;

  constructor(private lambdaService: LambdaServiceService) { }

  ngOnInit() {
    // set validators for form inputs
    this.numberOne = new FormControl(0, Validators.required);
    this.numberTwo = new FormControl(0, Validators.required);
    this.numberResult = new FormControl(0);

    this.callAdditionForm = new FormGroup({
      numberOne: this.numberOne,
      numberTwo: this.numberTwo,
      numberResult: this.numberResult
    });
  }

  performAddition(formValues) {
    this.lambdaService.performAddition(formValues.numberOne, formValues.numberTwo).subscribe(data => {
      this.callAdditionForm.controls['numberResult'].setValue(+data);
    });
  }

}
