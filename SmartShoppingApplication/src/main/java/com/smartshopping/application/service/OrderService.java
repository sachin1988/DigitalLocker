package com.smartshopping.application.service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.smartshopping.application.model.Order;

public interface OrderService {

	@NotNull Iterable<Order> getAllOrders();
	Order createOrder(@NotNull(message="Please enter the valid details") @Valid Order order);
	void updateOrder(@NotNull(message="Please enter the valid details") @Valid Order order);
}
