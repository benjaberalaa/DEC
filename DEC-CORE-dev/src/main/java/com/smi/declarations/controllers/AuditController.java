package com.smi.declarations.controllers;

import com.smi.declarations.entities.AuditLog;
import com.smi.declarations.repositories.AuditLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/audit")
public class AuditController {

    @Autowired
    private AuditLogRepository auditLogRepository;

    @GetMapping("/history")
    @PreAuthorize("hasRole('ADMIN') or hasRole('AUDIT')")
    public ResponseEntity<org.springframework.data.domain.Page<AuditLog>> getAuditHistory(
            @org.springframework.web.bind.annotation.RequestParam(defaultValue = "0") int page,
            @org.springframework.web.bind.annotation.RequestParam(defaultValue = "10") int size,
            @org.springframework.web.bind.annotation.RequestParam(required = false) String username,
            @org.springframework.web.bind.annotation.RequestParam(required = false) String action
    ) {
        org.springframework.data.domain.Pageable pageable = org.springframework.data.domain.PageRequest.of(page, size);
        return ResponseEntity.ok(auditLogRepository.findWithFilters(username, action, pageable));
    }
}
