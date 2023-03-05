import static org.junit.jupiter.api.Assertions.*;

import java.util.Arrays;

import org.junit.jupiter.api.Test;

class WordPlayUnitTests1 {

	WordPlay wordPlay = new WordPlay();

	// Task 1
	@Test
	void testWhatComesFirst() {
		assertEquals("ant comes before zebra in the alphabet", wordPlay.whatComesFirst("ant", "zebra"));
		assertEquals("ant comes before bee in the alphabet", wordPlay.whatComesFirst("bee", "ant"));
		assertEquals("ant is the same as ant", wordPlay.whatComesFirst("ant", "ant"));
		assertEquals("ANT is the same as ant", wordPlay.whatComesFirst("ANT", "ant"));
	}

}
