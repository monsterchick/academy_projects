import java.io.File;
import java.util.Scanner;

public class FileWritingUtilities {

	public String forTestReadFile(String filename) throws Exception {
		File file = new File(filename);
		Scanner fileScanner = new Scanner(file);
		String name="";
		while(fileScanner.hasNext()){
			name = name+" "+fileScanner.next();
		}
		name = name.trim();
		fileScanner.close();
		return name;
	}	
}