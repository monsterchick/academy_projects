import java.util.Random;

public class Dice {
	int faceValue;
	
	//Task 1
	public int roll() {
		Random rand = new Random();
		faceValue = 1 + rand.nextInt(6);
		return faceValue; 		
	}

	//Task 1 - second bit
	public int getFaceValue() {
		
		return faceValue;
	}
	
	
	//Task 2
	public String toString() {
		return Integer.toString(faceValue);
	}
	

}
