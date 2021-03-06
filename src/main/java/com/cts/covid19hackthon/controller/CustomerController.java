package com.cts.covid19hackthon.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cts.covid19hackthon.model.Customer;
import com.cts.covid19hackthon.service.DBService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class CustomerController {
	@Autowired
	DBService dbService;
	
	@GetMapping("/customers")
	public List<Customer> getCustomers() {
		return dbService.getAllCustomers();
	}
	
	@PostMapping("/customers")
	public void addCustomer(@RequestBody Customer cust) {
		dbService.addCustomer(cust);
		return ;
	}
}
