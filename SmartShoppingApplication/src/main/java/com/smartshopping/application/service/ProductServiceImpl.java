package com.smartshopping.application.service;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

import com.smartshopping.application.exception.ResourceNotFoundException;
import com.smartshopping.application.model.Product;
import com.smartshopping.application.repository.ProductRepository;

public class ProductServiceImpl implements Service {

	ProductRepository productRepository;
	@Override
	public Product save(Product product) {
		return productRepository.save(product);
	}

	@Override
	public Product getProduct(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Product getProduct(long productId) {
		return productRepository.findById(productId).orElseThrow(()-> new ResourceNotFoundException());
	}

	@Override
	public @NotNull Iterable<Product> getAllProducts() {
		return productRepository.findAll();
	}

}
