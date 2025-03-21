import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputInvestment } from '../input-investment.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<InputInvestment>();
  enteredInitialInvestment='0';
  enteredAnnualInvestment='0';
  enteredEstimatedReturn='5';
  enteredDuration='10';

  OnSubmit(){
    this.calculate.emit({
      initialInvestment:+this.enteredInitialInvestment,
      duration:+this.enteredDuration,
      expectedReturn:+this.enteredEstimatedReturn,
      annualInvestment:+this.enteredAnnualInvestment
    })
  }
}
