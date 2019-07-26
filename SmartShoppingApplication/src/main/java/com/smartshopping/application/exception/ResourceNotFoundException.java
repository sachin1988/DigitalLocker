package com.smartshopping.application.exception;

public class ResourceNotFoundException extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 9194101803459062898L;

	public ResourceNotFoundException(){
		super();
	}
	
	public ResourceNotFoundException(final String message,final Throwable cause){
		super(message,cause);
	}
	
	public ResourceNotFoundException(final String message){
		super(message);
	}
	public ResourceNotFoundException(final Throwable cause){
		super(cause);
	}
}
