package partyfinder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Event {

  private class Location {
    private String address;

    public String getAddress() {
      return this.address;
    }
    public void setAddress(String address) {
      this.address = address;
    }
  }
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String name;
    private String hostName;
    private User host;
    private String theme;
    private String startTime;
    private String endTime;
    private Location location;
    private int ageLimit;
    private String drinks;
    private double cover;

    public Event() { }
    public Event(String name, String hostName, String theme, String startTime, String endTime, Location location, int ageLimit, String drinks, double cover) {
      this.name = name;
      this.hostName = hostName;
      this.theme = theme;
      this.startTime = startTime;
      this.endTime = endTime;
      this.location = location;
      this.ageLimit = ageLimit;
      this.drinks = drinks;
      this.cover = cover;
    }

    public Integer getId() {
        return this.id;
    }
    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
      return this.name;
    }
    public void setName(String name) {
      this.name = name;
    }

    public String getHostName() {
      return this.hostName;
    }
    public void setHostName(String hostName) {
      this.hostName = hostName;
    }

    public String getTheme() {
      return this.theme;
    }
    public void setTheme(Sting theme) {
      this.theme = theme;
    }

    public String getStartTime() {
      return this.startTime;
    }
    public void setStarTime(String startTime) {
      this.startTime = startTime;
    }

    public String getEndTime() {
      return this.endTime;
    }
    public void setEndTime(String endTime) {
      this.endTime = endTime;
    }

    public String getLocation() {
      return this.getAddress();
      // return this.location;
    }
    public void setLocation(String address) {
      this.setAddress(address);
    }

    public int getAgeLimit() {
      return this.ageLimit;
    }
    public void setAgeLimit(int ageLimit) {
      this.ageLimit = ageLimit;
    }

    public String getDrinks() {
      return this.drinks;
    }
    public void setDrinks(String drinks) {
      this.drinks = drinks;
    }

    public double getCover() {
      return this.cover;
    }
    public void setCover(double cover) {
      this.cover = cover;
    }
}
