package com.cts.covid19hackthon.repository;

import com.cts.covid19hackthon.model.TestCenter;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface TestCenterRepository extends MongoRepository<TestCenter, String>{

}