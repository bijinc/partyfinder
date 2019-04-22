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

import partyfinder.Event;
import partyfinder.EventRepository;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path="/demo")
public class EventController {
	@Autowired
	private EventRepository eventRepository;

	/* POST: Add new event */
	@PostMapping(path="/host")
	public @ResponseBody Event addEvent (@RequestBody Event body) {
		Event event = new Event(body.getName(), body.getHostName(), body.getTheme(), body.getStartTime(), body.getEndTime(), body.getLocation(), body.getAgeLimit(), body.getDrinks(), body.getCover());
		return eventRepository.save(event);
	}

	/* GET: Get all events */
	@GetMapping(path="/all")
	public @ResponseBody Iterable<Event> getAllEvents() {
		return eventRepository.findAll();
	}

	/* GET: Get event with id */
	@GetMapping(path="/event/{id}")
	public ResponseEntity<?> getEvent(@PathVariable("id") Integer id) {
		Event event = eventRepository.findById(id).get();
		if (event == null) {
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Event not found");
		}
		return new ResponseEntity<Event>(event, HttpStatus.OK);
	}

	/* PUT: Update event with ID */
	@PutMapping(path="/edit/{id}")
	public ResponseEntity<?> editEvent(@PathVariable("id") Integer id, @RequestBody Event body) {
		Event event = eventRepository.findById(id).get();

		if (event == null) {
			return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body("Event not found");
		}

    event.setName(body.getName());
    event.setHostName(body.getName());
    event.setTheme(body.getTheme());
    event.setStarTime(body.getStartTime());
    event.setEndTime(body.getEndTime());
    event.setLocation(body.getLocation());
    event.setAgeLimit(body.getAgeLimit());
    event.setDrinks(body.getDrinks());
    event.setCover(body.getCover());

		eventRepository.save(event);
		return new ResponseEntity<Event>(event, HttpStatus.OK);
	}
}
