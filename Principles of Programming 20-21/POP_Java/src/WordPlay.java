import java.util.Random;

/**
 * 
 * WordPlay class 
 * used to explore if and loop statements
 * @Since 2019
 */

public class WordPlay {
	
	//Task1
	public String whatComesFirst(String str1, String str2) {
		String comesFirst = new String();
		int compare = str1.compareToIgnoreCase(str2);
		
		if (compare > 0) {
			comesFirst = str2 + " comes before " + str1 + " in the alphabet";
		} else if (compare < 0) {
			comesFirst = str1 + " comes before " + str2 + " in the alphabet";
		} else {
			comesFirst = str1 + " is the same as " + str2;
		}
		return comesFirst;
	}


	
	//Task 2
	public String backwardsString(String str) {
		String reverse = new String("");	//create an object "reverse" to save each char
		
		int length = str.length();
		for (int i = length - 1; i >= 0 ; i--)
			reverse += str.charAt(i); {		//add each char to the object
		}
		 return reverse;
	}
	
	
	//task 3
	public String[] addressBook(String[] name, String[] numbers) {
		String[] nameAndNums = new String[3];
		
		//	for loop in name list
		for (int i = 0; i < name.length; i++) {
			nameAndNums[i] = name[i] + " " + numbers[i];
		}
		return nameAndNums;		
	}
	
	
	//Task 4
	public String rockPaperScissors(String userChose) {

		Random r = new Random();	//call a random method
		int comInput =  r.nextInt(3);	//Make the computer simulate random boxing
		String comChose = "";	//comChose means which option(Rock, Paper, Scissors)computer has already chose randomly.
		String Winner = ""; //Winner is an object to return the difference result
		
		if (comInput == 0) {
			comChose = "rock";
			} else if (comInput == 1) {
				comChose = "paper";
			} else if (comInput == 2) {
				comChose = "scissors";
			}
		
		if (comChose == userChose) {	//	case of both choices are the same
			
			Winner = "USER:" + userChose + " vs COMP:" + comChose + " it is a draw";
			
//			case of the computer giving a rock and it's not a draw
		} else if (comInput == 0 && userChose == "scissors") { 		
			Winner = "USER:" + userChose + " vs COMP:" + comChose + " COMPUTER wins";
		} else if (comInput == 0 && userChose == "paper") { 
			Winner = "USER:" + userChose + " vs COMP:" + comChose + " user wins";
			
//			case of the computer giving a paper and it's not a draw
		} else if (comInput == 1 && userChose == "rock"){		
			Winner = "USER:" + userChose + " vs COMP:" + comChose + " COMPUTER wins";
		} else if (comInput == 1 && userChose == "scissors"){
			Winner = "USER:" + userChose + " vs COMP:" + comChose + " user wins";
			
//			case of the computer giving a scissors and it's not a draw
		} else if (comInput == 2 && userChose == "rock") {		
			Winner = "USER:" + userChose + " vs COMP:" + comChose + " user wins";
		} else if (comInput == 2 && userChose == "paper") {		
			Winner = "USER:" + userChose + " vs COMP:" + comChose + " COMPUTER wins";
		}

		return Winner;
	}
	
	
}






		
		
		
