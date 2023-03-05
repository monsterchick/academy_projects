import static org.junit.jupiter.api.Assertions.*;
import java.util.NoSuchElementException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FileWritingUnitTests1 {

	FileReading fileReading;
	FileWriting fileWriting;
	FileWritingUtilities utilities;

	@BeforeEach
	void setUp() {
		fileReading = new FileReading();
		fileWriting = new FileWriting();
		utilities =  new FileWritingUtilities();
	}

	@Test 
	//Test Task 1
	void testWriteYourName() throws Exception {
		assertEquals("John Smith", fileReading.readName1(fileWriting.writeYourName("John Smith")));
		assertEquals("Sarah Jane Smith", utilities.forTestReadFile(fileWriting.writeYourName("Sarah Jane Smith")));
		assertThrows(NoSuchElementException.class,() -> fileReading.readName1(fileWriting.writeYourName("Bob")));
	}
}
