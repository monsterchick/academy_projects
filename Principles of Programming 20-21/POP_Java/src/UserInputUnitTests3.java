import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class UserInputUnitTests3 {

	UserInput userInput;

	@BeforeEach
	void createObject() {
		userInput = new UserInput();
	}

	@Test
	//Task 3
	void testReadTenNames() {
		String[] names = {"Michael","Saru","Christopher","Sylvia","Paul","Harry","Phillipa","Gabriel","Jett","Ash"};
		assertArrayEquals(names, userInput.readTenNames());

	}
}