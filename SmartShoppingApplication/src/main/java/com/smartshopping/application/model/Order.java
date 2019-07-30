package com.smartshopping.application.model;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.Valid;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@Table(name="orders")
@JsonIdentityInfo(generator=ObjectIdGenerators.PropertyGenerator.class,property="orderProducts")
public class Order {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@JsonFormat(pattern="dd/MM/YYYY")
	private LocalDate dateCreated;
	
	private String status;
	
	@OneToMany(mappedBy="pk.order")
	@Valid
	private List<OrderProduct> orderProducts=new ArrayList<>();
	
	public Double getTotalOrderPrice(){
		double sum= 0D;
		List<OrderProduct> orderProducts=getOrderProducts();
		for(OrderProduct orderproduct : orderProducts){
			sum +=orderproduct.getPrice();
		}
	
		return sum;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public LocalDate getDateCreated() {
		return dateCreated;
	}

	public void setDateCreated(LocalDate dateCreated) {
		this.dateCreated = dateCreated;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public List<OrderProduct> getOrderProducts() {
		return orderProducts;
	}

	public void setOrderProducts(List<OrderProduct> orderProducts) {
		this.orderProducts = orderProducts;
	}
	@Transient
	public int getNumberOfProducts(){
		return this.orderProducts.size();
	}
	
}