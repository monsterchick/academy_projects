
/**
 * 
 * Salary calculator class used to explore if and loop statements
 * 
 */

public class SalaryCalculator {

	//Task 1 
	public double salaryTax(double grossSalary) {
		double tax = 0;
		double netSalary = 0;
		
		if (grossSalary >= 45000) {		//	50% tax
			tax = grossSalary * 0.5;
			netSalary = grossSalary - tax;
		} else if (grossSalary >= 30000 && grossSalary < 44999){	//	30% tax
			tax = grossSalary * 0.3;
			netSalary = grossSalary - tax;
		} else if (grossSalary >= 0 && grossSalary < 29999) {	//	15% tax
			tax = grossSalary * 0.15;
			netSalary = grossSalary - tax;
		}
		return netSalary;
	}
	 

	 // Task 2 
	public double calculateNI(double grossSalary, char NIBand) {
		double NI = 0;
		double netSalary = 0;
		double NIpaysA = 0.12;
		double NIpaysB = 0.0585;
		double NIpaysC = 0.02;
		double NIpaysD = 0;
		
		
		if (NIBand == 'A' || NIBand == 'a') {
			NI = grossSalary * NIpaysA;
		} else if (NIBand == 'B' || NIBand == 'b') {
			NI = grossSalary * NIpaysB;
		} else if (NIBand == 'C' || NIBand == 'c') {
			NI = grossSalary * NIpaysC;
		} else {
			NI = grossSalary * NIpaysD;
		}
		netSalary = grossSalary - NI;
		return netSalary;
	}

	 // task 3
	public double salaryTotal(double[] sals) {
		double sum = 0;
		for (int i = 0; i < sals.length; i++) {
			sum += sals[i];
		}
		return sum;
	}



	 // Task 4 
	public double salaryAverage(double[] sals) {
		double sum = 0;
		double average = 0;
		for (int i = 0; i < sals.length; i++) {
			sum += sals[i];
		}
		average = sum / sals.length;
		return average;
	}
	 

	// Task 5 
	public double[] salaryIncrease(double[] sals) {
		//create an array with data type double and set the length of parameter(sals) to the expected size.
		double[] newSalary = new double[sals.length];	 

		for (int i = 0; i < sals.length; i++) {		//calculate each number of sals contained then add into teh newSalary one by one
			newSalary[i] =  sals[i] * (1+0.05);
		}
		return newSalary;
	}
	 

}







