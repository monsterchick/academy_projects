import java.util.Arrays;

public class SalaryCalculatorTest {

	public static void main(String[] args) {
		SalaryCalculator salary = new SalaryCalculator();

		// Task1
		 System.out.println(salary.salaryTax(30000.00));

		// Task 2
		 System.out.println(salary.calculateNI(50000, 'A'));

		// Array example for next three tasks
		 double[] sals = {23000.50, 25478.66, 78496.56};

		// Task 3
		 System.out.println(salary.salaryTotal(sals));

		// Task 4
		 System.out.println(salary.salaryAverage(sals));

		// Task 5
		 System.out.println(Arrays.toString(salary.salaryIncrease(sals)));
	}

}
