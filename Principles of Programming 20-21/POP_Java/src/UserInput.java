import java.util.Scanner;

public class UserInput {
	//Task 1 
	public String sayHello() {
		Scanner input = new Scanner(System.in);
		System.out.println("What's your name?");
		String name = input.next();	//receive the user's name from the input
		return "Hello " + name;
	}
	 
	
	//Task 2 
	public int[] readTenNumbers() {
		int i = 0;
		int[] numbers = new int[10];
		Scanner input = new Scanner(System.in);
		
		for (i=0; i<numbers.length; i++) {
			System.out.println("Please enter number: ");
			numbers[i] = input.nextInt();
		}	
		return numbers;
	}
	
	
	//Task 3 
	public String[] readTenNames() {
		String[] names = new String[10];
		Scanner input = new Scanner(System.in);
		
		for (int i = 0; i < names.length; i++) {
			System.out.println("please enter ten names: ");
			names[i] = input.next();
		}
		return names;
	}
	 

}
