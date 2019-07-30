package com.smartshopping.application.model;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class OrderProduct {

	@EmbeddedId
	@JsonIgnore
	private OrderProductPK orderProductPK;
	
	@Column(nullable=false)
	private Integer quantity;
	
	

	public OrderProduct() {
		super();
		// TODO Auto-generated constructor stub
	}



	public OrderProduct(Order order,Product product, Integer quantity) {
		super();
		orderProductPK = new OrderProductPK();
		orderProductPK.setOrder(order);
		orderProductPK.setProduct(product);
		this.quantity = quantity;
	}

	@Transient
	public Product getProduct(){
		return orderProductPK.getProduct();
	}
	
	@Transient
	public double getPrice(){
		return orderProductPK.getProduct().getPrice()*quantity;
	}



	public OrderProductPK getOrderProductPK() {
		return orderProductPK;
	}



	public void setOrderProductPK(OrderProductPK orderProductPK) {
		this.orderProductPK = orderProductPK;
	}



	public Integer getQuantity() {
		return quantity;
	}



	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}



	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((orderProductPK == null) ? 0 : orderProductPK.hashCode());
		result = prime * result + ((quantity == null) ? 0 : quantity.hashCode());
		return result;
	}



	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		OrderProduct other = (OrderProduct) obj;
		if (orderProductPK == null) {
			if (other.orderProductPK != null)
				return false;
		} else if (!orderProductPK.equals(other.orderProductPK))
			return false;
		if (quantity == null) {
			if (other.quantity != null)
				return false;
		} else if (!quantity.equals(other.quantity))
			return false;
		return true;
	}
	
	
}

