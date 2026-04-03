package com.smi.declarations.controllers;

import com.smi.declarations.entities.AuditLog;
import com.smi.declarations.repositories.AuditLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/audit")
public class AuditController {

    @Autowired
    private AuditLogRepository auditLogRepository;

    @GetMapping("/history")
    @PreAuthorize("hasRole('ADMIN') or hasRole('AUDIT')")
    public ResponseEntity<List<AuditLog>> getAuditHistory() {
        return ResponseEntity.ok(auditLogRepository.findAllByOrderByCreatedAtDesc());
    }
}
