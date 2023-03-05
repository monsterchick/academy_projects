import java.util.Random;

/** 
 * MyArrays class
 * This class contains all the array tasks following the week 13 lecture. 
 * 
 * @author melanie
 * @since 2019
 */

public class MyArrays {

	private int[] a;


	// Task 1
	public int addUpNumbers(int num1, int num2, int num3, int num4, int num5) {
		int result = num1 + num2 + num3 + num4 + num5;
		return result;
	}
	 
	//Task 2
	public int addUpNumbers(int[] numbers) {
		int sum = 0;
		for(int i = 0; i < numbers.length; i++) {
			sum = sum + numbers[i];
			
		}
		return sum;
	}
	
	
	// Task 3
	public double averageOfNumbers(int[] numbers1) {
		int sum = 0;
		for(int i = 0; i < numbers1.length; i++) {
			sum = sum + numbers1[i];
		}
		return (double) sum / numbers1.length;
	}
	 
	
	// Task 4
	public int[] convertToCelsius(int[] temF) {
		int i = 0;
		int temC[] = new int[temF.length];	          //create a empty list to save the answer one by one
														//xxx.length is very common when using array and forLoop
		for(i = 0; i < temF.length; i++) {
			temC[i] = ((temF[i] - 32) * 5/9);	          //*(5/9));  <--this is not work for computer
		}
		return temC;	
	}
	 
	
	//Task 5
	public String[] unitMarks(int[] marks) {
		double sum = 0;		//a summary variable for saving the summary of total marks
		double average = 0;		//a average variable for calculate the average of the total marks
		String[] result = new String[7];	//create a string array for 6 subjects and 1 average of them
		
		String[] unit = {"APP:","BSAD:","CF:","DAD:", "N&CS:", "POP:"};	//to create a string array
		//calculate the average
		for (int i = 0; i < marks.length; i++){		//variable name "i" is a index. Allows to add each subject and its mark.
			sum += marks[i];		
		result[i] = unit[i] + marks[i];		//Add the same index of both elements
		}
		average = sum / marks.length;
		result[6] = "Average:" + Double.toString(average);	//Convert the data type Double to String
		return result;
	}
	
	
	//Task 6
	public String andTheWinnerIs(String[] names) {
		Random rd = new Random(); // creating Random object
		int randomNumber = rd.nextInt(names.length);
		return names[randomNumber];
	}
}