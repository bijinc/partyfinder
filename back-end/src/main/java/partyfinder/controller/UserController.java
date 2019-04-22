package partyfinder.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;

import partyfinder.User;
import partyfinder.UserRepository;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="/demo")
public class UserController {
	@Autowired
	private UserRepository userRepository;

	/* POST: Add new user */
	@PostMapping(path="/add")
	public @ResponseBody User addNewUser (@RequestBody User body) {
		User user = new User(body.getUserName(), body.getFirstName(), body.getLastName(), body.getEmail(), body.getPassword(), body.getBirthday());
		return userRepository.save(user);
	}

	/* GET: Get all users */
	@GetMapping(path="/all")
	public @ResponseBody Iterable<User> getAllUsers() {
		return userRepository.findAll();
	}

	/* GET: Get user with id */
	@GetMapping(path="/user/{id}")
	public ResponseEntity<?> getUser(@PathVariable("id") Integer id) {
		User user = userRepository.findById(id).get();
		if (user == null) {
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("User not found");
		}
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}

	/* PUT: Update user with ID */
	@PutMapping(path="/edit/{id}")
	public ResponseEntity<?> editUser(@PathVariable("id") Integer id, @RequestBody User body) {
		User user = userRepository.findById(id).get();

		if (user == null) {
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("User not found");
		}
		user.setFirstName(body.getFirstName());
		user.setLastName(body.getLastName());
    user.setEmail(body.getEmail());
    user.setPassword(body.getPassword());
    user.setBirthday(body.getBirthday());
    user.setEvent(body.getEvent());

		userRepository.save(user);
		return new ResponseEntity<User>(user, HttpStatus.OK);
	}
}
