package it.sc.calendar_crossFit.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import it.sc.calendar_crossFit.auth.entity.User;
import it.sc.calendar_crossFit.model.ClassCrossFit;
import it.sc.calendar_crossFit.model.UserClass;

public interface UserClassDaoRepository<T> extends CrudRepository<UserClass, Long> {
	
	List<UserClass> findByUser(User user);
	List<UserClass> findByGymClass(ClassCrossFit classCrossFit);
	boolean existsByUserAndGymClass(User user, ClassCrossFit classCrossFit);
	void deleteByUserAndGymClass(User user, ClassCrossFit classCrossFit);
	long countByUser(User user);
}
