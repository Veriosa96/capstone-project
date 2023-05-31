package it.sc.calendar_crossFit.repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import it.sc.calendar_crossFit.model.ClassCrossFit;

public interface ClassDaoRepository extends CrudRepository<ClassCrossFit, Long>{
	
	
	List<ClassCrossFit> findByName(String name);
	Optional<ClassCrossFit> findById(Long id);
	List<ClassCrossFit> findByDateTimeAfter(LocalDateTime dateTime);
	List<ClassCrossFit>findByDateTime(LocalDateTime dateTime);
	List<ClassCrossFit> findByDuration(int duration);
	List<ClassCrossFit> findByCapacityGreaterThan(int capacity);
	
}
