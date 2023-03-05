import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class LabExampleUnitTests1 {

	LabExample labExample;

	@BeforeEach
	void createObject() {
		labExample = new LabExample();
	}

	// Task 1
	@Test
	void testHighestOfTwo() {
		assertEquals(20, labExample.highestOfTwo(10, 20));
		assertEquals(-1, labExample.highestOfTwo(5, 5));
		assertEquals(345, labExample.highestOfTwo(345, 5));

	}

}
