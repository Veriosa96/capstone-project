package it.sc.calendar_crossFit.auth.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import it.sc.calendar_crossFit.auth.entity.ERole;
import it.sc.calendar_crossFit.auth.entity.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {
    
	Optional<Role> findByRoleName(ERole roleName);

}
