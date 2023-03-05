import java.io.BufferedReader;
import java.io.File;
import java.util.Scanner;
import java.io.FileNotFoundException;
import java.io.FileReader;


public class FileReading {
	
	//Task 1 
	public String readName1(String filename) throws FileNotFoundException {
			File file = new File(filename);
			Scanner fileScan = new Scanner(file);
			String firName = "";
			String lasName = "";
			firName = fileScan.nextLine();
			lasName = fileScan.nextLine();
			fileScan.close();
		
		return firName + " " + lasName;
	}
	
	
	
	//Task 2 
	public String readName2(String filename) throws Exception {
		String fullName = "";
		try {
			File file = new File(filename);
			Scanner fileScan = new Scanner(file);
			String firName = fileScan.next();
			String lasName = fileScan.next();
			fileScan.close();
			fullName =  firName + " " + lasName;
		}
		catch (Exception e) {
			fullName = "Invalid filename";
		}
		return fullName;
	}

	
	//Task 3 
	public String[] readNames(String filename) throws Exception {
		String[] heroesList = new String[10];
		File file = new File(filename);
		Scanner fileScan = new Scanner(file);
		
		for (int i = 0; i < heroesList.length; i++) {
			heroesList[i] = fileScan.nextLine();
		}
		fileScan.close();
		return heroesList;
	}
	
	
	//Task 4 
	public int[] readNumbers1(String filename) throws Exception {
		int[] numbers = new int[20];
		
		try {
			File file = new File(filename);
			Scanner fileScan = new Scanner(file);
			
			for (int i = 0; i < numbers.length; i++) {
				numbers[i] = fileScan.nextInt();
				} 
			fileScan.close();
		}
		catch (Exception e) {
			System.out.println("There are certain numbers which are not datatype \"Int\"");
		}
		return numbers;
	}
	

	//Task5   
	public int[] readNumbers2(String filename) throws FileNotFoundException {
		int counting = 0;
		int[] result = new int[20];
		Scanner file = new Scanner(new File(filename));
		
		while(file.hasNext() && counting < 20) {
			if (file.hasNextInt()) {
				result[counting] = file.nextInt();
				counting++;
			} else {
				continue;
			}
		}
		file.close();
		return result;
	}
	
	
	//Task 6 
	public String[] readAddressBook(String filename) throws FileNotFoundException {
		int counting = 0;							//an object for counting the times of loop
		String[] result = new String[5];				//create the object result with 5 places for saving 
														//5 groups(eg.Donald Knuth: 0111 is one of them)
		Scanner file = new Scanner(new File(filename));		//this method is to scan the given file
		while(file.hasNext() && counting < 10) {	//hasNext() is to check if there is any characters(any data type)
			String name = file.nextLine();		//object name is to save the Singular lines(all names)
			String number = file.nextLine();	//object name is to save the Plural lines(all numbers)
			result[counting] = name + ": " + number; //make an addition to ten groups
			counting++;
		}
		file.close();
		return result;
	}
}




