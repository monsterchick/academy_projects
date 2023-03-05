/**
 * 
 * LabExample class used to explore if and loop statements
 * 
 */

public class LabExample {



	// Task 1 
	public int highestOfTwo(int num1, int num2) {
		int maxNumber = Math.max(num1, num2);
		if (num1 == num2){
			maxNumber = -1;
		}
		return maxNumber;
	}


	// Task 2 
	public String calculateGrade(int mark) {
		 String grade;
		 if (0 <= mark && mark < 40) {
			 grade = "Fail";
		 }	else if (40 <= mark && mark < 50) {
			 grade = "3rd";
		 }	else if (50 <= mark && mark < 60) {
			 grade = "2ii";
		 }	else if (60 <= mark && mark < 70) {
			 grade = "2i";
		 }	else if (70 <= mark && mark <= 100) {
			 grade = "1st";
		 }	else {
			 grade = "Invalid mark";
		 }
		 
		 return grade;
	 }
	 

	//Task 3 
	public String headsOrTails(String guess) {
		String result = new String();  		// heads = 1 | tails = 0
		
		// Generate a random integer 0 or 1
		int flip = (int) (Math.random() * 2);
		
		// you : I = "heads" : "heads"
		if (guess == "heads" && flip == 1) {
			result = "Correct: you guessed " + guess + " and I flipped heads";
		}
		// you : I = "heads" : "tails"
		else if (guess == "heads" && flip == 0) {
			result = "Incorrect: you guessed " + guess + " and I flipped tails";
		}
		// you : I = "tails" : "tails"
		else if (guess == "tails" && flip == 0) {
			result = "Correct: you guessed " + guess + " and I flipped tails";
		}
		// you : I = "tails" : "heads"
		else if (guess == "tails" && flip == 1) {
			result = "Incorrect: you guessed " + guess + " and I flipped heads";
		}
		return result;
	}

	 
	
	//Task 4 
	public int sumFromOneToWhat(int topNum) {
		int sum = 0;
		for (int i = 0; i <= topNum; ++i) {
			sum += i;
		}
		return sum;
	}
	 

	//Task 5 
	public int sumFromWhatToWhat(int startNum, int endNum) {
		int sum = 0;
		for (int i = startNum; i <= endNum; ++i){
			sum += i;
		}
		return sum;
	}
	
	
}










