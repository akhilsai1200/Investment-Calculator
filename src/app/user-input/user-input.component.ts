import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  enteredInitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredEstimatedReturn='5';
  enteredDuration='10';
  constructor(private investmentService:InvestmentService){

  }
  OnSubmit(){
    this.investmentService.calculateInvestmentResults
    ({
      initialInvestment:+this.enteredInitialInvestment,
      duration:+this.enteredDuration,
      expectedReturn:+this.enteredEstimatedReturn,
      annualInvestment:+this.enteredAnnualInvestment
    });
    this.enteredInitialInvestment='0';
    this.enteredAnnualInvestment='0';
    this.enteredEstimatedReturn='5';
    this.enteredDuration='10';
  }
}
