


public class SalaryTest {

	public static void main(String[] args) {
		Salary mySalary = new Salary();
	
		System.out.println("My salary with a £200 increase is "+ mySalary.salaryIncrease(23000));
		System.out.println("My salary with a £200.50 increase is "+ mySalary.salaryIncrease(23000.30));
		System.out.println("My salary with a 10% increase is "+ mySalary.salaryIncrease(20000.00, 10));
		System.out.println("My monthly pay is now "+ mySalary.calculatePay(25000.00));
		System.out.println("My salary is "+ mySalary.formatCurrency(23000.30));//25000.0055
	}

}
