package com.smartshopping.application.repository;

import org.springframework.data.repository.CrudRepository;

import com.smartshopping.application.model.Product;

public interface ProductRepository extends CrudRepository<Product,Long>{

}
