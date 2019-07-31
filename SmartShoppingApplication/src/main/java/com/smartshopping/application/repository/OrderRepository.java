package com.smartshopping.application.repository;

import org.springframework.data.repository.CrudRepository;

import com.smartshopping.application.model.Order;

public interface OrderRepository extends CrudRepository<Order,Long> {

}
