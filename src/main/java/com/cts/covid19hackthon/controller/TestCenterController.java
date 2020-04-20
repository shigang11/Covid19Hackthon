package com.cts.covid19hackthon.controller;

import java.util.List;

import com.cts.covid19hackthon.model.TestCenter;
import com.cts.covid19hackthon.service.DBService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class TestCenterController {

    @Autowired
	DBService dbService;
	
	@GetMapping("/testCenters")
	public List<TestCenter> getCustomers() {
		return dbService.getAllTestCenters();
	}
	
	@PostMapping("/testCenters")
	public void addCustomer(@RequestBody TestCenter center) {
		dbService.addTestCenter(center);
		return ;
	}

}