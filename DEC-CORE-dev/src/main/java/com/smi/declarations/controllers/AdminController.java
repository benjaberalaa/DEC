package com.smi.declarations.controllers;

import com.smi.declarations.entities.AppUser;
import com.smi.declarations.repositories.AppUserRepository;
import com.smi.declarations.repositories.AuditLogRepository;
import com.smi.declarations.entities.AuditLog;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.FileOutputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {

    @Autowired
    private AppUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private AuditLogRepository auditLogRepository;

    @PostMapping("/users")
    public ResponseEntity<?> createUser(@RequestBody Map<String, String> request) {
        String username = request.get("username");
        String password = request.get("password");
        String role = request.get("role"); // ROLE_USER or ROLE_AUDIT

        if (userRepository.findByUsername(username).isPresent()) {
            return ResponseEntity.badRequest().body(Map.of("message", "User already exists"));
        }

        AppUser user = new AppUser();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(role);
        userRepository.save(user);

        return ResponseEntity.ok(Map.of("message", "User created successfully"));
    }

    @GetMapping("/users")
    public ResponseEntity<List<AppUser>> getAllUsers() {
        return ResponseEntity.ok(userRepository.findAll());
    }

    @PostMapping("/upload-xsd")
    public ResponseEntity<?> uploadXsd(@RequestParam("type") String type, @RequestParam("file") MultipartFile file) {
        try {
            String uploadDir = "uploaded_xsd";
            Path uploadPath = Paths.get(uploadDir);
            if (!Files.exists(uploadPath)) {
                Files.createDirectories(uploadPath);
            }

            String fileName = type.toUpperCase() + ".xsd";
            Path filePath = uploadPath.resolve(fileName);
            
            try (FileOutputStream fos = new FileOutputStream(filePath.toFile())) {
                fos.write(file.getBytes());
            }

            // Log action
            AuditLog log = new AuditLog();
            log.setCreatedAt(LocalDateTime.now());
            log.setUsername(SecurityContextHolder.getContext().getAuthentication().getName());
            log.setAction("UPLOAD_XSD");
            log.setTargetType(type);
            log.setDetails("XSD updated for " + type);
            auditLogRepository.save(log);

            return ResponseEntity.ok(Map.of("message", "XSD uploaded successfully: " + fileName));
        } catch (Exception e) {
            return ResponseEntity.status(500).body(Map.of("message", "Upload failed: " + e.getMessage()));
        }
    }
}
