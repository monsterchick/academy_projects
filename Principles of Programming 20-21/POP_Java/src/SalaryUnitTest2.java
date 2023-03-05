import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class SalaryUnitTest2 {
	Salary salaryCalculator;

	@BeforeEach
	void createObject() {
		salaryCalculator = new Salary();
	}

	@Test
	void testSalaryIncreaseInteger() {
		assertEquals(23200, salaryCalculator.salaryIncrease(23000));
		assertEquals(32200, salaryCalculator.salaryIncrease(32000));
		assertEquals(200, salaryCalculator.salaryIncrease(0));
	}

	@Test
	void testSalaryIncreaseDouble() {
		assertEquals(23200.8, salaryCalculator.salaryIncrease(23000.3));
		assertEquals(32200.50, salaryCalculator.salaryIncrease(32000.00));
		assertEquals(200.50, salaryCalculator.salaryIncrease(0.0));
	}

}
