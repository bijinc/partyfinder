package partyfinder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String username;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

    private String birthday;
    private boolean hosting;
    private Event event;

    public User() { }
    public User(String username, String firstName, String lastName, String email, String password, String birthday, boolean hosting, Event event) {
        this.username = username;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
        this.hosting = hosting;
        this.event = event;
    }

    public Integer getId() {
        return this.id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return this.firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getName() {
        return this.firstName + " " + this.lastName;
    }

    public boolean isHosting() {
      return this.hosting;
    }
    public void setHosting(boolean val) {
      this.hosting = val;
    }

    public Event getEvent() {
      return this.event;
    }
    public void setEvent(Event event) {
      this.event = event;
      this.setHosting(true);
    }



}
