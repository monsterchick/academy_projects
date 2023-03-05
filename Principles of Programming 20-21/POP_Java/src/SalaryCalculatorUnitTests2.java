import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class SalaryCalculatorUnitTests2 {

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

	// Task 2
	@Test
	void testCalculateNI() {
		assertEquals(44000.0, salary.calculateNI(50000.00, 'A'));
		assertEquals(47075.0, salary.calculateNI(50000.00, 'B'));
		assertEquals(49000.0, salary.calculateNI(50000.00, 'C'));
		assertEquals(50000.0, salary.calculateNI(50000.00, 'D'));
	}

}
