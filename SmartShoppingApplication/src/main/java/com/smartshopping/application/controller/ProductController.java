package com.smartshopping.application.controller;

import javax.validation.constraints.NotNull;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.smartshopping.application.model.Product;
import com.smartshopping.application.service.ProductService;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	ProductService productService;
	
	public ProductController(ProductService productService) {
        this.productService = productService;
    }
	
	@GetMapping(value ={"","/"})
	public @NotNull Iterable<Product> getProducts(){
		return productService.getAllProducts();
		
	}
}
