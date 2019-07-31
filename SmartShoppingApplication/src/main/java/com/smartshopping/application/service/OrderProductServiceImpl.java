package com.smartshopping.application.service;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;

import com.smartshopping.application.model.OrderProduct;
import com.smartshopping.application.repository.OrderProductRepository;

public class OrderProductServiceImpl implements OrderProductService{

	OrderProductRepository orderProductRepository;
	
	public OrderProductServiceImpl(OrderProductRepository orderProductRepository){
		this.orderProductRepository=orderProductRepository;
	}
	
	@Override
	public OrderProduct create(
			@NotNull(message = "The products for order cannot be null.") @Valid OrderProduct orderProduct) {
		return this.orderProductRepository.save(orderProduct);
	}

	
}
