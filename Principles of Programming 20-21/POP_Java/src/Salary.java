import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.Currency;
import java.util.*;


/** ;
 * Salary class
 * This class contains all the Salary tasks following the week 13 lecture. 
 * 
 * @author melanie
 * @since 2019
 */

public class Salary {

	// Task 1	
  	public int salaryIncrease(int salary) {
  		 int newSalary;
  		 newSalary = salary + 200;
  		 return newSalary;
	}
	
	
	 //Task 2
	public String salaryIncrease(double salary) {
		String newSalary;
		DecimalFormat df = new DecimalFormat("#######.00");
		newSalary = df.format(salary + 200.50);
		return newSalary;
	}
	
	
	 //Task 3: 
	public double salaryIncrease(double salary, double increase) {
		double newSalary;
		double salaryIncrease = salary *(increase/100);
		newSalary = salary + salaryIncrease;
		return newSalary;
	}
	
	
	 //Task 4
	public double calculatePay(double salary) {
		double tax= salary * 0.15;
		double pension = salary * 0.13;
        double newSalary = salary - tax - pension;
		return newSalary / 12;
	}
	

	//Task 5 - this one is more of a challenge - you can come back to it later
	public String formatCurrency(double salary) {
		Currency area = Currency.getInstance("GBP");		// Create a currency for GBP
		String symbol = area.getSymbol();
		DecimalFormat df = new DecimalFormat("#,###,###,###.00");  		// make 2 decimal places
		String formatedNumber = symbol + df.format(salary);
		return formatedNumber;
	}
}
