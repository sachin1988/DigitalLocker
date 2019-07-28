package com.smartshopping.application.service;

import javax.validation.constraints.NotNull;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.smartshopping.application.exception.ResourceNotFoundException;
import com.smartshopping.application.model.Product;
import com.smartshopping.application.repository.ProductRepository;
@Service
@Transactional
public class ProductServiceImpl implements ProductService {

	ProductRepository productRepository;
	
	public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
	
	public Product save(Product product) {
		return productRepository.save(product);
	}

	public Product getProduct(String name) {
		// TODO Auto-generated method stub
		return null;
	}

	public Product getProduct(long productId) {
		return productRepository.findById(productId).orElseThrow(()-> new ResourceNotFoundException());
	}

	@Override
	public @NotNull Iterable<Product> getAllProducts() {
		return productRepository.findAll();
	}

}
