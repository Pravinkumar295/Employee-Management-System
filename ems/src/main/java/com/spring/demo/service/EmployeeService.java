package com.spring.demo.service;

import java.util.List;

import com.spring.demo.dto.EmployeeDto;

public interface EmployeeService {
	EmployeeDto createEmployee(EmployeeDto employeeDto);
	
	EmployeeDto getEmployeeById(Long employeeId);
	
	List<EmployeeDto> getAllEmployees();
	
	EmployeeDto updateEmployee(Long employeeId,EmployeeDto updatedEmployee);
	
	void deleteEmployee (Long employeeId);
}
