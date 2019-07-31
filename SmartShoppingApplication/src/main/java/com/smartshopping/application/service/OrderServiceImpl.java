package com.smartshopping.application.service;

import java.time.LocalDate;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.smartshopping.application.model.Order;
import com.smartshopping.application.repository.OrderRepository;

public class OrderServiceImpl implements OrderService {
	
	OrderRepository orderRepository;
	
	OrderServiceImpl(OrderRepository orderRepository){
		this.orderRepository=orderRepository;
	}

	@Override
	public @NotNull Iterable<Order> getAllOrders() {
		return this.orderRepository.findAll();
	}

	@Override
	public Order createOrder(@NotNull(message = "Please enter the valid details") @Valid Order order) {
		order.setDateCreated(LocalDate.now());
		return this.orderRepository.save(order);
	
	}

	@Override
	public void updateOrder(@NotNull(message = "Please enter the valid details") @Valid Order order) {
		this.orderRepository.save(order);
		
	}

}
