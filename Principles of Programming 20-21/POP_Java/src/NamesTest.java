

public class NamesTest {

	public static void main(String[] args) {
		Names names = new Names();
		
		System.out.println("Upper case name is "+names.upperCaseName("boris"));
		System.out.println("Full name is "+names.fullName("Alison", "Jones"));
		System.out.println("Count of letters in the name is "+names.letterCount("Melanie"));
		System.out.println("Are the names the same "+names.theSameName("Donald", "donald"));
		System.out.println("Proper case name is "+names.properCaseName("mAtThEw"));
		
	}

}
