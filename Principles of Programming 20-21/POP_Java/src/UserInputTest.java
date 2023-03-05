import java.util.Arrays;

public class UserInputTest {

	public static void main(String[] args) {
		UserInput userInput = new UserInput();

		//Task 1
		System.out.println(userInput.sayHello());

		//Task 2
		System.out.println(Arrays.toString(userInput.readTenNumbers()));

		//Task 3
		System.out.println(Arrays.toString(userInput.readTenNames()));
	}
}