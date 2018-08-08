import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatInputModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CallAdditionLambdaComponent } from './call-addition-lambda/call-addition-lambda.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '../../node_modules/@angular/forms';
import { LambdaServiceService } from './shared/lambda-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CallAdditionLambdaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [LambdaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
