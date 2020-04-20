package com.cts.covid19hackthon.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.covid19hackthon.model.Customer;
import com.cts.covid19hackthon.model.TestCenter;
import com.cts.covid19hackthon.repository.CustomerRepository;
import com.cts.covid19hackthon.repository.TestCenterRepository;

@Service
public class DBService {
	  @Autowired
	  private CustomerRepository customerReposit;
	  @Autowired
	  TestCenterRepository testCenterRepository;
	  
	  public List<Customer> getAllCustomers() {
		  return customerReposit.findAll();
	  }
	  
	  public void addCustomer(Customer cust) {
		  Customer c1 = new Customer(cust.getFirstName(), cust.getLastName(), cust.getPhone());
		  
		  customerReposit.save(c1);
	  }

	  public List<TestCenter> getAllTestCenters() {
		return testCenterRepository.findAll();
	}
	
	public void addTestCenter(TestCenter testCenter) {
		TestCenter tc = new TestCenter(testCenter.getName(), testCenter.getAddress1(), testCenter.getAddress2(), 
			testCenter.getCity(), testCenter.getState(), testCenter.getZip(), testCenter.getCountry());
		
			testCenterRepository.save(tc);
	}
}
