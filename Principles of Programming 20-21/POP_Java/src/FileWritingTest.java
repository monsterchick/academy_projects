import java.util.Arrays;

public class FileWritingTest {

	public static void main(String[] args) throws Exception {
		
		FileWriting fileWriting = new FileWriting();
		FileReading fileReading = new FileReading();
		
		//Task 1
		String filename=fileWriting.writeYourName("Mary Jane Anne Jones");
		System.out.println(filename); //Have a look in the file.
	
		//Task 2
		fileWriting.writeRandomNumbers(14);
		System.out.println("10 numbers: "+Arrays.toString(fileReading.readNumbers1(fileWriting.writeRandomNumbers(10))));
		System.out.println("No numbers: "+Arrays.toString(fileReading.readNumbers1(fileWriting.writeRandomNumbers(0))));
		System.out.println("18 numbers: "+Arrays.toString(fileReading.readNumbers1(fileWriting.writeRandomNumbers(18))));
		System.out.println(Arrays.toString(fileReading.readNumbers1(fileWriting.writeRandomNumbers(20))));
	}

}
