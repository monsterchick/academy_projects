import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class SalaryCalculatorUnitTests1 {

	SalaryCalculator salary;

	@BeforeEach
	void createObject() {
		salary = new SalaryCalculator();
	}

	// Task 1
	@Test
	void testSalaryTax() {
		assertEquals(30000.0, salary.salaryTax(60000.00));
		assertEquals(21000.0, salary.salaryTax(30000.00));
		assertEquals(17000.0, salary.salaryTax(20000.00));
	}

}
