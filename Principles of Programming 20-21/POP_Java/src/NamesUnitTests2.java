import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class NamesUnitTests2 {

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

	@Test
	//Task 2
	void testFullName() {
		assertEquals("Alison Jones", names.fullName("Alison", "Jones"));
		assertEquals("s t", names.fullName("s", "t"));
		assertEquals(" ", names.fullName("", ""));
		assertEquals("4 g", names.fullName("4", "g"));
	}
	
}
