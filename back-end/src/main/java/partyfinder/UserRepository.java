package partyfinder;

// import org.springframework.data.repository.CrudRepository;
import org.springframework.data.mongodb.repository.MongoRepository;
import partyfinder.User;

public interface UserRepository extends MongoRepository<User, Integer> {

}
