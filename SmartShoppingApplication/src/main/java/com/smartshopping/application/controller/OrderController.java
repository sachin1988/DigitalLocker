package com.smartshopping.application.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import javax.validation.constraints.NotNull;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.smartshopping.application.dto.OrderProductDto;
import com.smartshopping.application.exception.ResourceNotFoundException;
import com.smartshopping.application.model.Order;
import com.smartshopping.application.model.OrderProduct;
import com.smartshopping.application.model.OrderStatus;
import com.smartshopping.application.service.OrderProductService;
import com.smartshopping.application.service.OrderService;
import com.smartshopping.application.service.ProductService;

@RestController
@RequestMapping("api/orders")
public class OrderController {

	OrderService orderService;
	ProductService productService;
	OrderProductService orderProductService;
	
	
	
	
	public OrderController() {
		super();
		// TODO Auto-generated constructor stub
	}
	OrderController(OrderService orderService,ProductService productService,OrderProductService orderProductService ){
		this.orderProductService=orderProductService;
		this.orderService=orderService;
		this.productService=productService;
	}
	@GetMapping
	@ResponseStatus(HttpStatus.OK)
	public @NotNull Iterable<Order> list(){
		return this.orderService.getAllOrders();
		
	}
	
	 @PostMapping
	    public ResponseEntity<Order> create(@RequestBody OrderForm form) {
	        List<OrderProductDto> formDtos = form.getProductOrders();
	        validateProductsExistence(formDtos);
	        Order order = new Order();
	        order.setStatus(OrderStatus.PAID.name());
	        order = this.orderService.createOrder(order);

	        List<OrderProduct> orderProducts = new ArrayList<>();
	        for (OrderProductDto dto : formDtos) {
	            orderProducts.add(orderProductService.create(new OrderProduct(order, productService.getProduct(dto
	              .getProduct()
	              .getId()), dto.getQuantity())));
	        }

	        order.setOrderProducts(orderProducts);

	        this.orderService.updateOrder(order);

	        String uri = ServletUriComponentsBuilder
	          .fromCurrentServletMapping()
	          .path("/orders/{id}")
	          .buildAndExpand(order.getId())
	          .toString();
	        HttpHeaders headers = new HttpHeaders();
	        headers.add("Location", uri);

	        return new ResponseEntity<>(order, headers, HttpStatus.CREATED);
	    }

	    private void validateProductsExistence(List<OrderProductDto> orderProducts) {
	        List<OrderProductDto> list = orderProducts
	          .stream()
	          .filter(op -> Objects.isNull(productService.getProduct(op
	            .getProduct()
	            .getId())))
	          .collect(Collectors.toList());

	        if (!CollectionUtils.isEmpty(list)) {
	            new ResourceNotFoundException("Product not found");
	        }
	    }

	    public static class OrderForm {

	        private List<OrderProductDto> productOrders;

	        public List<OrderProductDto> getProductOrders() {
	            return productOrders;
	        }

	        public void setProductOrders(List<OrderProductDto> productOrders) {
	            this.productOrders = productOrders;
	        }
	    }
}
