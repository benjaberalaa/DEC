package com.smi.declarations.Utils;

import com.smi.declarations.entities.AppUser;
import com.smi.declarations.repositories.AppUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class DataSeeder implements CommandLineRunner {

    @Autowired
    private AppUserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public void run(String... args) throws Exception {
        if (userRepository.count() == 0) {
            createUser("admin", "admin", "ROLE_ADMIN");
            createUser("user", "user", "ROLE_USER");
            createUser("audit", "audit", "ROLE_AUDIT");
            System.out.println("Default users created!");
        }
    }

    private void createUser(String username, String password, String role) {
        AppUser user = new AppUser();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));
        user.setRole(role);
        userRepository.save(user);
    }
}
