package com.smi.declarations.entities;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "DEC_AUDIT_LOG")
public class AuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private java.time.LocalDateTime createdAt;

    private String username;

    private String action; // CREATE_PERIOD, CLOSE_PERIOD, UPLOAD_XSD

    private String targetType; // e.g. TR_DON

    private Long targetId; // ID of the period

    @Column(length = 2000)
    private String details;
}
