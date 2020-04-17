package com.cts.covid19hackthon.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cts.covid19hackthon.model.Customer;
import com.cts.covid19hackthon.repository.CustomerRepository;

@Service
public class DBService {
	  @Autowired
	  private CustomerRepository reposit;
	  
	  public List<Customer> getAll() {
		  return reposit.findAll();
	  }
	  
	  public void add(Customer cust) {
		  Customer c1 = new Customer(cust.getFirstName(), cust.getLastName(), cust.getPhone());
		  
		  reposit.save(c1);
	  }
}
