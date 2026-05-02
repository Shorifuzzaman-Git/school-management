package com.example.backend.admin.controller;

import com.example.backend.admin.service.AdminService;
import com.example.backend.admission.entity.Admission;
import com.example.backend.admission.entity.AdmissionForm;
import com.example.backend.admission.service.AdmissionService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin/admission")
@PreAuthorize("hasRole('ADMIN')")
public class AdminAdmissionController {
    private final AdmissionService admissionService;
    private final AdminService adminService;
    public AdminAdmissionController(AdmissionService admissionService,
                           AdminService adminService
    ) {
        this.admissionService=admissionService;
        this.adminService=adminService;
    }
    @GetMapping("/forms")
    public List<AdmissionForm> getAllForms(){
        return adminService.getAllForms();
    }
    @GetMapping("/admissionApproved")
    public List<Admission>getAllApproved(){
        return adminService.getAllApproved();
    }
    @PutMapping("/{id}/approve")
    public AdmissionForm approve(@PathVariable String id) {
        return admissionService.approve(id);
    }

    @PutMapping("/{id}/reject")
    public AdmissionForm reject(@PathVariable String id) {
        return admissionService.reject(id);
    }
    @PutMapping("/{id}/confirm")
    public String confirm(@PathVariable String id) {
        admissionService.confirmAdmission(id);
        return "Admission confirmed";
    }
}
