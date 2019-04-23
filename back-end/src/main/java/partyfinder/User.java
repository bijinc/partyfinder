package partyfinder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String birthday;
    private boolean hosting;
    private String eventName;

    public User() { }
    public User(String userName, String firstName, String lastName, String email, String password, String birthday) {
        this.userName = userName;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.birthday = birthday;
        this.hosting = false;
        this.eventName = "";
    }

    public String getId() {
        return this.id;
    }
    public void setId(String id) {
        this.id = id;
    }

    public String getUserName() {
      return this.userName;
    }
    public void setUserName(String userName) {
      this.userName = userName;
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

    public String getEmail() {
      return this.email;
    }
    public void setEmail(String email) {
      this.email = email;
    }

    public String getPassword() {
      return this.password;
    }
    public void setPassword(String password) {
      this.password = password;
    }

    public boolean isHosting() {
      return this.hosting;
    }
    public void setHosting(boolean val) {
      this.hosting = val;
    }

    public String getBirthday() {
      return this.birthday;
    }
    public void setBirthday(String birthday) {
      this.birthday = birthday;
    }

    public String getEvent() {
      return this.eventName;
    }
    public void setEvent(String eventName) {
      this.eventName = eventName;
      this.setHosting(true);
    }
}
