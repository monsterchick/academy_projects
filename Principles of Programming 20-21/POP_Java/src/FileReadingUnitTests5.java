import static org.junit.jupiter.api.Assertions.*;
import java.io.IOException;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class FileReadingUnitTests5 {

	FileReading fileReading;

	@BeforeEach
	void setUp() {
		fileReading = new FileReading();
	}

	@Test 
	//Test Task 1
	void testReadName1() throws Exception {
		assertEquals("Suzy Atfield-Cutts", fileReading.readName1("namefile.txt"));
		assertThrows(IOException.class,() -> fileReading.readName1("ddd.txt"));
	}

	@Test 
	//Test Task 2
	void testReadName2() throws Exception{
		assertEquals("Suzy Atfield-Cutts", fileReading.readName2("namefile.txt"));
		assertEquals("Invalid filename", fileReading.readName2("ddd.txt"));
	}

	@Test 
	//Test Task 3
	void testReadNames() throws Exception{
		String[] names = {"Hiram Mcfarland", "Clark Snow", "Tory Warren", "Guy Cowan", "Ned Mcintosh",
				"Hugo Johnston", "Beth Bates", "Tiffany Mccarty", "Kevin Matthews", "Elisabeth Yates"};
		assertArrayEquals(names, fileReading.readNames("namesFile.txt"));
	}

	@Test 
	//Test Task 4
	void testReadNumbers1() throws Exception{
		int[] numbers = {3456, 1234, 2345, 5555, 6743, 1235, 4556, 1987, 
				1254, 6776, 4345, 3422, 2334, 2323, 4333, 0, 0, 0, 0, 0};
		assertArrayEquals(numbers, fileReading.readNumbers1("numbersFile1ToRead.txt"));
	}

	@Test 
	//Test Task 5
	void testReadNumbers2() throws Exception{
		int[] numbers = {3456, 1234, 2345, 5555, 6743, 1235, 4556, 
				1254, 6776, 4345, 3422, 2334, 2323, 4333, 0, 0, 0, 0, 0, 0};
		assertArrayEquals(numbers, fileReading.readNumbers2("numbersFile2ToRead.txt"));
	}
}
