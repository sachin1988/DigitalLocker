package com.smartshopping.application.dto;
import com.smartshopping.application.model.Product;

public class OrderProductDto {
	private Product product;
	private Integer Quantity;
	public Product getProduct() {
		return product;
	}
	public void setProduct(Product product) {
		this.product = product;
	}
	public Integer getQuantity() {
		return Quantity;
	}
	public void setQuantity(Integer quantity) {
		Quantity = quantity;
	}
	
	

}
