package com.smi.declarations.repositories;

import com.smi.declarations.entities.AuditLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuditLogRepository extends JpaRepository<AuditLog, Long> {
    @org.springframework.data.jpa.repository.Query("SELECT a FROM AuditLog a WHERE " +
            "(:username IS NULL OR LOWER(a.username) LIKE LOWER(CONCAT('%', :username, '%'))) AND " +
            "(:action IS NULL OR LOWER(a.action) LIKE LOWER(CONCAT('%', :action, '%'))) " +
            "ORDER BY a.createdAt DESC")
    org.springframework.data.domain.Page<AuditLog> findWithFilters(
            @org.springframework.data.repository.query.Param("username") String username,
            @org.springframework.data.repository.query.Param("action") String action,
            org.springframework.data.domain.Pageable pageable
    );
}
