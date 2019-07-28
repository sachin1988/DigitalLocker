package com.smartshopping.application.model;

import javax.persistence.Basic;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

@Entity
public class Product {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	@NotNull(message="The product name is required")
	@Basic(optional=false)
	private String name;
	
	private double price;
	
	private String productURL;

	
	
	public Product() {
		super();
	}

	public Product(Long id, @NotNull(message = "The product name is required") String name, double price,
			String productURL) {
		super();
		this.id = id;
		this.name = name;
		this.price = price;
		this.productURL = productURL;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public String getProductURL() {
		return productURL;
	}

	public void setProductURL(String productURL) {
		this.productURL = productURL;
	}

	@Override
	public String toString() {
		StringBuilder builder = new StringBuilder();
		builder.append("Product [id=");
		builder.append(id);
		builder.append(", name=");
		builder.append(name);
		builder.append(", price=");
		builder.append(price);
		builder.append(", productURL=");
		builder.append(productURL);
		builder.append("]");
		return builder.toString();
	}
	
	
	
}
