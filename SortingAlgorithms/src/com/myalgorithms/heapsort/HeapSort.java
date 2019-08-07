package com.myalgorithms.heapsort;

public class HeapSort {

	public void sort(int arr[]) {
		int n = arr.length;

		for (int i = n / 2 - 1; i >= 0; i--) 
			heapify(arr, n, i);

		
		
		 for (int i=n-1; i>=0; i--) 
	        { 
	            // Move current root to end 
	            int temp = arr[0]; 
	            arr[0] = arr[i]; 
	            arr[i] = temp; 
	  
	            // call max heapify on the reduced heap 
	            heapify(arr, i, 0); 
	        } 
		
	}

	void heapify(int arr[], int n, int i) {

		int largest = i;
		int lNode = 2 * i + 1;
		int rNode = 2 * i + 2;

		if (lNode < n && arr[lNode] > arr[largest])
			largest = lNode;

		if (rNode < n && arr[rNode] > arr[largest])
			largest = rNode;

		if (largest != i) {
			int swap = arr[i];
			arr[i] = arr[largest];
			arr[largest] = swap;
			heapify(arr,n,largest);
		}

	}

	 static void printArray(int arr[]) {
		int n = arr.length; 
        for (int i=0; i<n; ++i) 
            System.out.print(arr[i]+" "); 
        System.out.println(); 
	}

	public static void main(String[] args) {
		// TODO Auto-generated method stub

		int arr[] = {12, 11, 13, 5, 6, 7}; 
        int n = arr.length; 
  
        HeapSort ob = new HeapSort(); 
        ob.sort(arr); 
  
        System.out.println("Sorted array is"); 
        printArray(arr);
	}

}
