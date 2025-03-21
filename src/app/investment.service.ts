import { Injectable, signal } from "@angular/core";
import { InputInvestment } from "./input-investment.model";

@Injectable({ providedIn:'root'})
export class InvestmentService{
    results = signal<{
        year: number,
        interest: number,
        valueEndOfYear: number,
        annualInvestment: number,
        totalInterest: number,
        totalAmountInvested: number,
      }[] | undefined>(undefined);

      calculateInvestmentResults(data:InputInvestment) {
        const {initialInvestment,duration,expectedReturn,annualInvestment}=data;
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
      
        this.results.set(annualData);
      }
}