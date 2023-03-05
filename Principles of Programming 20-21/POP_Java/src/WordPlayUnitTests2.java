import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;

import org.junit.jupiter.api.Test;

class WordPlayUnitTests2 {

	WordPlay wordPlay = new WordPlay();

	// Task 1
	@Test
	void testWhatComesFirst() {
		assertEquals("ant comes before zebra in the alphabet", wordPlay.whatComesFirst("ant", "zebra"));
		assertEquals("ant comes before bee in the alphabet", wordPlay.whatComesFirst("bee", "ant"));
		assertEquals("ant is the same as ant", wordPlay.whatComesFirst("ant", "ant"));
		assertEquals("ANT is the same as ant", wordPlay.whatComesFirst("ANT", "ant"));
	}

	// Task 2
	@Test
	void testBackwardsString() {
		assertEquals("einaleM", wordPlay.backwardsString("Melanie"));
		assertEquals("c", wordPlay.backwardsString("c"));
		assertEquals("", wordPlay.backwardsString(""));
		assertEquals("54321", wordPlay.backwardsString("12345"));
		assertEquals("This is programming!", wordPlay.backwardsString("!gnimmargorp si sihT"));

	}

}
