package com.myalgorithms.bubblesort;

import java.util.Arrays;
import java.util.Date;
import java.util.stream.IntStream;

public class BubbleSort {

	 static void bubbleSort(Integer arr[]){
		System.out.println("Start time bubbleSort "+new Date());
		int len=arr.length;
		IntStream.range(0,len-1).flatMap(i->IntStream.range(1, len-i)).forEach(j->{
			if(arr[j-1]>arr[j]){
				int temp=arr[j];
				arr[j]=arr[j-1];
				arr[j-1]=temp;
			}
		});
		Arrays.stream(arr).forEach(num->System.out.println(num));
		System.out.println("End time bubbleSort "+new Date());
	}
	
	static void bubbleSortOptimized(Integer arr[]){
		System.out.println("Start time bubbleSortOptimized "+new Date());
		int len=arr.length;
		int i=0;
		boolean swapR=true;
		while(i <len-1&&swapR){
			swapR=false;
			for(int j=1;j<len-i;j++){
				
				if(arr[j-1]>arr[j]){
				
					int temp=arr[j-1];
					arr[j-1]=arr[j];
					arr[j]=temp;
					swapR=true;
				}
				
				
			}
			if(!swapR)
				break;
			i++;
		}
		Arrays.stream(arr).forEach(num->System.out.println(num));
		
		System.out.println("End time bubbleSortOptimized "+new Date());
		
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		Integer arr[]={5,3,7,8,9,2,4};
		
		BubbleSort.bubbleSort(arr);
		
		BubbleSort.bubbleSortOptimized(arr);
		

	}

}
