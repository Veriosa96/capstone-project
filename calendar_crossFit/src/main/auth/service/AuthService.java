package it.sc.calendar_crossFit.auth.service;

import it.sc.calendar_crossFit.auth.payload.LoginDto;
import it.sc.calendar_crossFit.auth.payload.RegisterDto;

public interface AuthService {
    
	String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    
}
