import { Component, output, signal} from '@angular/core';
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
  //@Output() calculate = new EventEmitter<InputInvestment>();
  calculate = output<InputInvestment>()
  enteredInitialInvestment=signal('0');
  enteredAnnualInvestment=signal('0');
  enteredEstimatedReturn=signal('5');
  enteredDuration=signal('10');

  OnSubmit(){
    this.calculate.emit({
      initialInvestment:+this.enteredInitialInvestment(),
      duration:+this.enteredDuration(),
      expectedReturn:+this.enteredEstimatedReturn(),
      annualInvestment:+this.enteredAnnualInvestment()
    })
    this.enteredInitialInvestment.set('0');
    this.enteredAnnualInvestment.set('0');
    this.enteredEstimatedReturn.set('5');
    this.enteredDuration.set('10');
  }
}
