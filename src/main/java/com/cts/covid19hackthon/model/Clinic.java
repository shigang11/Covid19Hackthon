package com.cts.covid19hackthon.model;

import org.springframework.data.annotation.Id;

import lombok.Data;

@Data
public class Clinic {
	@Id
	private String id;

	private String name;
	private String address1;
	private String address2;
	private String city;
	private String state;
	private String zip;
	private String country;
}
