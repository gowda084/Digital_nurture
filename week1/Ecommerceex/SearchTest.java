package week1.Ecommerceex;

import java.util.Arrays;
import java.util.Comparator;

public class SearchTest {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(205, "Shirt", "Apparel"),
            new Product(150, "Book", "Education"),
            new Product(310, "Phone", "Electronics")
        };

        System.out.println("Linear Search:");
        Product result1 = SearchUtil.linearSearch(products, 150);
        System.out.println(result1 != null ? result1 : "Product not found");

        // Sort array by productId for binary search
        Arrays.sort(products, Comparator.comparingInt(p -> p.productid));

        System.out.println("Binary Search:");
        Product result2 = SearchUtil.binarySearch(products, 150);
        System.out.println(result2 != null ? result2 : "Product not found");
    }
}
