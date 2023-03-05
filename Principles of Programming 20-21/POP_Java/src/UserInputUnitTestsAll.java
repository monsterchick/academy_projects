
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UserInputUnitTestsAll {

	UserInput userInput;

	@BeforeEach
	void createObject() {
		userInput = new UserInput();
	}

	@Test
	//Task 1
	void testSayHello() {
		assertEquals("Hello Suzy".toLowerCase(), userInput.sayHello().toLowerCase());
		assertEquals("Hello Bob".toLowerCase(), userInput.sayHello().toLowerCase());
	}

	@Test
	//Task 2
	void testReadTenNumbers() {
		int[] numbers = {1,2,3,4,5,6,7,8,9,10};
		assertArrayEquals(numbers, userInput.readTenNumbers());
		int[] numbers1 = {10,20,30,40,50,60,70,80,90,100};
		assertArrayEquals(numbers1, userInput.readTenNumbers());
	}

	@Test
	//Task 3
	void testReadTenNames() {
		String[] names = {"Michael","Saru","Christopher","Sylvia","Paul","Harry","Phillipa","Gabriel","Jett","Ash"};
		assertArrayEquals(names, userInput.readTenNames());

	}
}
