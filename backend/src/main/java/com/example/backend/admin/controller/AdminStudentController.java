package com.example.backend.admin.controller;

import com.example.backend.admin.service.AdminService;
import com.example.backend.admission.service.AdmissionService;
import com.example.backend.student.entity.Student;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/admin/student")
@PreAuthorize("hasRole('ADMIN')")
public class AdminStudentController {
    private final AdmissionService admissionService;
    private final AdminService adminService;
    public AdminStudentController(AdmissionService admissionService,
                           AdminService adminService
    ) {
        this.admissionService=admissionService;
        this.adminService=adminService;
    }
    @GetMapping("/allStudents")
    public List<Student> getAllStudents(){return  adminService.getAllStudents();}
}
