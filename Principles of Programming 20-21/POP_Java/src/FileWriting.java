import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.PrintWriter;
import java.util.Random;
import java.util.Scanner;



public class FileWriting {

	//Task 1 
	public String writeYourName(String name) throws Exception {
		int counting = 0;
		
		String fileToWrite = "myNamefile.txt";
		Scanner scan = new Scanner(name);
		PrintWriter pw = new PrintWriter (new BufferedWriter (new FileWriter(fileToWrite)));

		while(scan.hasNext() && counting < scan.next().length()) {
			pw.println(scan.next());
			//scan.nextLine(name);
			counting++;
		}
		/*
		 create scanner-->name
		 use scanner-->loop name(each of them)
		 */
		pw.close();
		scan.close();
		return name;
	}
	
	//Task 2
	public String writeRandomNumbers(int numQuantity) throws Exception  {
	
		try {
			String filename = "randomNumbersFileToWrite.txt";	//a string object to save the path of file given
			Random rd = new Random();					//call a random() method
			//create a file for writing 20 numbers
			PrintWriter pw = new PrintWriter (new BufferedWriter (new FileWriter(filename)));
			//generate random integer and write into the file
			for (int i = 0; i < numQuantity; i++) {
				pw.println(rd.nextInt(8999) + 1000);	//formula for random: Math.Random() * (max - min + 1) + min
			}
			pw.close();
			return filename;
		}
		catch (Exception e){
		}
		return null;		//null for empty on java Console
	}
	 
}
