package com.example.backend.admin.service;

import com.example.backend.admission.entity.Admission;
import com.example.backend.admission.entity.AdmissionForm;
import com.example.backend.admission.repository.AdmissionFormRepository;
import com.example.backend.admission.repository.AdmissionRepository;
import com.example.backend.student.entity.Student;
import com.example.backend.student.repository.StudentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {
    private final AdmissionFormRepository admissionFormRepository;
    private final AdmissionRepository admissionRepository;
    private final StudentRepository studentRepository;
    public AdminService(AdmissionFormRepository admissionFormRepository,
                        AdmissionRepository admissionRepository,
                        StudentRepository studentRepository
                        ){
            this.admissionFormRepository=admissionFormRepository;
            this.admissionRepository=admissionRepository;
            this.studentRepository=studentRepository;
    }
  public   List<AdmissionForm>getAllForms(){
           return admissionFormRepository.findAll();
    }
    public  List<Admission> getAllApproved(){
       return admissionRepository.findAll();

    }
    public List<Student>getAllStudents(){
        return studentRepository.findAll();
    }
}

