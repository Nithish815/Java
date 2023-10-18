import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Scanner;

public class ArrayShuffle {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

        // Prompt the user for the array size
        System.out.print("Enter the size of the array: ");
        int size = scanner.nextInt();

        // Create an array to store the values
        Integer[] array = new Integer[size];

        // Input values from the user
        System.out.println("Enter the elements of the array:");
        for (int i = 0; i < size; i++) {
            array[i] = scanner.nextInt();
        }

        // Shuffle the array
        List<Integer> list = Arrays.asList(array);
        Collections.shuffle(list);

        // Convert the list back to an array
        list.toArray(array);

        // Display the shuffled array
        System.out.println("Shuffled array:");
        for (int element : array) {
            System.out.print(element + " ");
        }

        scanner.close();

	}

}
