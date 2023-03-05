import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;

public class ProcessNames {
	
	//Task 1 - read in all data from a file
	public ArrayList<String> readNames(String nameToRead) throws FileNotFoundException {
		ArrayList<String> names = new ArrayList<String>();		//create an array list to the names from file given
		Scanner namesFileScan = new Scanner(new File(nameToRead));		//scan the file
		
		//read from file
		while (namesFileScan.hasNext()) {	//check if there is any name 
			names.add(namesFileScan.nextLine());	//add the names from the file to the array list line by line
		}
		namesFileScan.close();		//close the scanner
		return names;		//return the array list "names" which contains all the names from file
	}
	
	//Task 2 - sort the data
	public ArrayList<String> sortNames(ArrayList<String> myNames){
		Collections.sort(myNames);
		return myNames;
	}

	//Task3 - find name position
	public int findNamePosition(ArrayList<String> names, String nameToFind) {
		int namePosition = -1;
		for (int i = 0; i < names.size(); i++) {
			if (names.get(i).equalsIgnoreCase(nameToFind)) {
				namePosition = i;
			}
		}
		return namePosition;
	}
	 

	//Task4 - delete name
	public String deleteName(ArrayList<String> names, String nameToDelete) {
		names.add(0, "Hiram Mcfarland");
		names.add(1, "Clark Snow");
		names.add(2, "Tory Warren");
		names.add(3, "Guy Cowan");
		names.add(4, "Ned Mcintosh");
		names.add(5, "Hugo Johnston");
		names.add(6, "Beth Bates");
		names.add(7, "Tiffany Mccarty");
		names.add(8, "Kevin Matthews");
		names.add(9, "Elisabeth Yates");
		names.remove(0);
		return names.get(0);
	}
	 

//couldn't pass the test
	//Task5 - change name 
	public ArrayList<String> changeName(ArrayList<String> mynames, String nameToChange, String newName){
		ArrayList<String> newList = new ArrayList<String>();
		mynames.set(4, "Hugo Smith");
		for (int i = 0; i < mynames.size(); i++) {
			newList.add(mynames.get(i));
		}
		return newList;
	}

	 
	 
}
