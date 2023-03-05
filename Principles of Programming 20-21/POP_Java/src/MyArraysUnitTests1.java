import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class MyArraysUnitTests1 {

	MyArrays myArrays;

	@BeforeEach
	void createObject() {
		myArrays = new MyArrays();
	}

	@Test
	//Task 1
	void testAddUpNumbersIndividual() {
		assertEquals(150, myArrays.addUpNumbers(10,20,30,40,50));
		assertEquals(0, myArrays.addUpNumbers(0,0,0,0,0));
		assertEquals(0, myArrays.addUpNumbers(-1,-1,0,1,1));
		assertEquals(5000000, myArrays.addUpNumbers(1000000,1000000,1000000,1000000,1000000));
	}
	
	
}
