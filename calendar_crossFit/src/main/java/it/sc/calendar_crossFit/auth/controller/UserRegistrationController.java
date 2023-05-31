package it.sc.calendar_crossFit.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import it.sc.calendar_crossFit.auth.entity.User;
import it.sc.calendar_crossFit.auth.repository.UserRepository;
import it.sc.calendar_crossFit.exception.ClassAlreadyBookedException;
import it.sc.calendar_crossFit.exception.UserNotFoundException;
import it.sc.calendar_crossFit.model.ClassCrossFit;
import it.sc.calendar_crossFit.repository.ClassDaoRepository;
import it.sc.calendar_crossFit.repository.UserClassDaoRepository;
import it.sc.calendar_crossFit.model.UserClass;


@RestController
@RequestMapping("/api/users")
public class UserRegistrationController {
	
	@Autowired
	private UserRepository userRepository;
	
	@Autowired 
	private ClassDaoRepository classDaoRepository;
	
	@Autowired
	private UserClassDaoRepository<?> userClassDaoRepository;
	
	@PostMapping("/book-class")
	public ResponseEntity<?> bookClass(@RequestParam("user_id") Long user_id, @RequestParam("class_id") Long class_id) throws UserNotFoundException, ClassNotFoundException, ClassAlreadyBookedException{
		User user = userRepository.findById(user_id)
                .orElseThrow(() -> new UserNotFoundException("Utente non trovato"));

        ClassCrossFit classCrossFit = classDaoRepository.findById(class_id)
                .orElseThrow(() -> new ClassNotFoundException("Classe non trovata"));

        // Verifica se l'utente ha già prenotato la classe
        if (userClassDaoRepository.existsByUserAndGymClass(user, classCrossFit)) {
            throw new ClassAlreadyBookedException("Classe già prenotata");
        }

        // Crea una nuova istanza di UserClass
        UserClass userClass = new UserClass();
        userClass.setUser(user);
        userClass.setClassCrossFit(classCrossFit);

        // Aggiungi l'istanza UserClass al repository
        userClassDaoRepository.save(userClass);

		return null;
		
	}

}
