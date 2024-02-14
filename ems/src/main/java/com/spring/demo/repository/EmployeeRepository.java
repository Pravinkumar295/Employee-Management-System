package com.spring.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spring.demo.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
