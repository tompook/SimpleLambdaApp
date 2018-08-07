import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CallAdditionLambdaComponent } from './call-addition-lambda.component';

describe('CallAdditionLambdaComponent', () => {
  let component: CallAdditionLambdaComponent;
  let fixture: ComponentFixture<CallAdditionLambdaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CallAdditionLambdaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CallAdditionLambdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
