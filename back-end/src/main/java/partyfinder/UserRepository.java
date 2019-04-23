package partyfinder;

import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;
import partyfinder.User;

public interface UserRepository extends MongoRepository<User, String> {

  @Override
  List<User> findAll();
}
