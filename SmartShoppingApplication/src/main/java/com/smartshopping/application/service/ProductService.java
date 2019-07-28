package com.smartshopping.application.service;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import org.springframework.validation.annotation.Validated;

import com.smartshopping.application.model.Product;

@Validated
public interface ProductService {
	Product save(Product product);
		
	Product getProduct(String name);

	Product getProduct(@Min(value =1L,message="Invalid Product ID.") long productId);
	
	@NotNull Iterable<Product> getAllProducts();
}
