package co.grandcircus.StocksAPI;

import org.springframework.http.HttpStatus;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin 
public class	UserAPIController {

    @Autowired
    private UserRepository repo;

    @GetMapping("/users")
    public List<User> readAll(){
        return repo.findAll();
    }
    
    @PostMapping("/login")
    @ResponseStatus(HttpStatus.CREATED)
    public User create(@RequestBody User user) {
        repo.save(user);
        return user;
    }
}
    