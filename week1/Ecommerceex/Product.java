package week1.Ecommerceex;

public class Product {
	int productid;
	String productname;
	String category;
	
	public Product(int productid,String productname,String category) {
		this.productid=productid;
		this.productname=productname;
		this.category=category;
	}
	@Override
	public String toString() {
		return productid+"-"+productname+"("+category+")";
	}
}
