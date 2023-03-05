
public class Craps {

	Dice dice1 = new Dice();
	Dice dice2 = new Dice();
	
	//Task 1
	public void shoot() {
		dice1.roll();
		dice2.roll();
	}
	
	
	//Task 1
	public Dice getDice1() {
		return dice1;
	}
	
	
	//Task 1
	public Dice getDice2() {
		return dice2;
	}
	
	
	//Task 2
	public int addUpScore() {
		int total = dice1.getFaceValue() + dice2.getFaceValue();
		return total;
	}
	
	
	//Task 3
	public String decideOutcome(int total) {
		String show;
		if ((total == 7) || (total == 11)) {		//case winning
			show = "You win";
		} else if ((total == 2) || (total == 3) || (total == 12)) {	//case losing
			show = "You lose";
		} else {
			show = "Throw again";	//case invalidation
		}
		return show;
	}
	

	//Task 4 - No UNIT TEST FOR THIS ONE - Check the output
	public String getResults() {
		System.out.print("\n");
		int total = addUpScore();
		String show = "Dice 1 is " + getDice1() + "\n"
					+ "Dice 2 is " + getDice2() + "\n"
					+ "Total is: " +  total + "\n"
					+ "Result is " + decideOutcome(total);						
		return show;
	}
	
	
	//Task 5 - No UNIT TEST FOR THIS ONE - Check the output
	public String playCraps() {
		int total = addUpScore();
		String crapsOutcome= "";
		do {
			shoot();
			crapsOutcome = crapsOutcome + getResults()+ "\n*************\n";
		}
		while(decideOutcome(total).equals("Result is Throw again")) ;//{			

			return crapsOutcome;	
	}
	
	
	/*Task 6 Additional tasks - OPTIONAL AND NOT ASSESSED
	Can you add a method that asks the user if they want to play again?
	public ?? playAgain(??){
		
	}*/

	
	
}
