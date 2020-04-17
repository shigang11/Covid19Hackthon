package com.cts.covid19hackthon;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;

@SpringBootApplication
//@EnableAutoConfiguration(exclude={MongoAutoConfiguration.class})
public class Covid19HackthonApplication {

	public static void main(String[] args) {
		SpringApplication.run(Covid19HackthonApplication.class, args);
	}

}
