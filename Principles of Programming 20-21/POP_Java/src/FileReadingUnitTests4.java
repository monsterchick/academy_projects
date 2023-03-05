import static org.junit.jupiter.api.Assertions.*;
import java.io.IOException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FileReadingUnitTests4 {

	FileReading fileReading;

	@BeforeEach
	void setUp() {
		fileReading = new FileReading();
	}
	@Test 
	//Test Task 1
	void testReadName1() throws Exception {
		assertEquals("Radia Perlman", fileReading.readName1("nameFileToRead.txt"));
		assertThrows(IOException.class,() -> fileReading.readName1("ddd.txt"));
	}

	@Test 
	//Test Task 2
	void testReadName2() throws Exception{
		assertEquals("Radia Perlman", fileReading.readName2("nameFileToRead.txt"));
		assertEquals("Invalid filename", fileReading.readName2("ddd.txt"));
	}

	@Test 
	//Test Task 3
	void testReadNames() throws Exception{
		String[] names = {"Charles Babbage", "Susan Graham", "Raj Reddy", "Judea Pearl", "Edgar Codd", "Tim Berners-Lee","Sally Floyd", "Sophie Wilson","Max Newman", "Vint Cerf"};
		assertArrayEquals(names, fileReading.readNames("computingHeroesToRead.txt"));
	}

	@Test 
	//Test Task 4
	void testReadNumbers1() throws Exception{
		int[] numbers = {3456, 1234, 2345, 5555, 6743, 1235, 4556, 1987, 
				1254, 6776, 4345, 3422, 2334, 2323, 4333, 0, 0, 0, 0, 0};
		assertArrayEquals(numbers, fileReading.readNumbers1("numbersFile1ToRead.txt"));
	}

}
