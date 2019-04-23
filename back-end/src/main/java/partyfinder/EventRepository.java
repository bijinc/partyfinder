package partyfinder;

// import org.springframework.data.repository.CrudRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import partyfinder.Event;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface EventRepository extends MongoRepository<Event, String> {

  @Override
  List<Event> findAll();
}
