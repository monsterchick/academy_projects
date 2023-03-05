import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class NamesUnitTests1 {

	Names names;
	
	@BeforeEach
    void createObject() {
    	names = new Names();
    }

	@Test
	//Task 1
	void testUpperCase() {
		assertEquals("BORIS", names.upperCaseName("boris"));
		assertEquals("FRED", names.upperCaseName("FRED"));
		assertEquals("", names.upperCaseName(""));
		assertEquals("5", names.upperCaseName("5"));
		assertEquals("A", names.upperCaseName("a"));
	}

}
