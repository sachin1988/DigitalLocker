package com.smartshopping.application.repository;

import org.springframework.data.repository.CrudRepository;

import com.smartshopping.application.model.OrderProduct;
import com.smartshopping.application.model.OrderProductPK;

public interface OrderProductRepository extends CrudRepository<OrderProduct,OrderProductPK>{

}
