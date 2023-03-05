import java.util.Arrays;

public class WordPlayTest {

	public static void main(String[] args) {
		WordPlay wordPlay = new WordPlay();
		// Task 1
		 System.out.println(wordPlay.whatComesFirst("ant", "zebra"));
		 System.out.println(wordPlay.whatComesFirst("fred", "bob"));
		 System.out.println(wordPlay.whatComesFirst("ant", "Ant"));
		 System.out.println(wordPlay.whatComesFirst("Fred", "ddddddd"));

		// Task 2
		 System.out.println(wordPlay.backwardsString("This is programming!"));

		// Task 3
		 String[] names = {"Tom","Dick","Harry"};
		 String[] numbers = {"0111","0554","4532"};
		 System.out.println(Arrays.toString(wordPlay.addressBook(names, numbers)));

		// Task 4
		 System.out.println(wordPlay.rockPaperScissors("rock"));
		 System.out.println(wordPlay.rockPaperScissors("paper"));
		 System.out.println(wordPlay.rockPaperScissors("scissors"));

	}

}
