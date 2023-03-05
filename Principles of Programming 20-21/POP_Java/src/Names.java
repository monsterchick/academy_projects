
/** 
 * Names class
 * This class contains all the String tasks following the week 13 lecture. 
 * 
 * @author melanie
 * @since 2019
 */

public class Names {
	
	// Task 1
	
	public String upperCaseName(String names){
		String newNames;
		newNames = names.toUpperCase();
		return newNames;
	}
	
	
	 //Task 2
	
	public String fullName(String firstname, String lastname) {
		String newNames;
		newNames = firstname + " " + lastname;
		return newNames;
	}
	 
	
	// Task 3
	
	public int letterCount(String name) {
		int nameLength = name.length();
		return nameLength;
	}
	 
	
	// Task 4
	public boolean theSameName(String name1, String name2) {
		Boolean result;
		if(name1.equalsIgnoreCase(name2)) {
			result = true;
		}
		else {
			result = false;
		}
		return result;
	}
	
	
	// Task 5
	public String properCaseName(String name) {
		//Extracts the characters from a string(name), between two specified indices(start,end), and returns the new sub string.
		//Begin the extraction at position 1, so all characters changed to lower case with toLowerCase method except the first one. 
		String rightName = name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
		return rightName;
	}
	 
}
