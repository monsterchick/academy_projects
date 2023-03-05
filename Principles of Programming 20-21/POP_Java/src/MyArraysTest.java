import java.util.Arrays;
import java.util.Random;

public class MyArraysTest {

	public static void main(String[] args) {
		MyArrays myArrays = new MyArrays();
		//task1 test
		System.out.println(myArrays.addUpNumbers(10, 20, 30, 40, 50));
		
		// task 2 test
		int[] numbers = {10, 20, 30, 40, 50};
		System.out.println(myArrays.addUpNumbers(numbers));
		
		//task 3 test
		int[] numbers1 = {102, 206, 303, 405, 501};
		System.out.println(myArrays.averageOfNumbers(numbers1));
		//task 4 test
		int[] temF = {70, 65, 84, 90, 45};
		System.out.println(Arrays.toString(myArrays.convertToCelsius(temF)));

		//task 5 test
		int [] marks = {64, 55, 45, 67, 65,88};
		System.out.println(Arrays.toString(myArrays.unitMarks(marks)));
		
		//task 6 test
		String[] names = {"Suzy", "Tim", "Toyin","Heather", "Gail", "Melanie"};
		System.out.println(myArrays.andTheWinnerIs(names));
		
	}
}
