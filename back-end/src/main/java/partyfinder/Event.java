package partyfinder;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    private String name;
    private String hostName;
    private String theme;
    private String startTime;
    private String endTime;
    private String address;
    private double[] coordinates;
    private boolean ageLimit;
    private boolean byob;
    private double cover;

    public Event() { }
    public Event(String name, String hostName, String theme, String startTime, String endTime, String address, double[] coordinates, boolean ageLimit, boolean byob, double cover) {
      this.name = name;
      this.hostName = hostName;
      this.theme = theme;
      this.startTime = startTime;
      this.endTime = endTime;
      this.address = address;
      this.coordinates = coordinates;
      this.ageLimit = ageLimit;
      this.byob = byob;
      this.cover = cover;
    }

    public String getId() {
        return this.id;
    }
    public void setId(String id) {
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
    public void setTheme(String theme) {
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

    public String getAddress() {
      return this.address;
    }
    public void setAddress(String address) {
      this.address = address;
    }

    public double[] getCoordinates() {
      return this.coordinates;
    }
    public void setCoordinates(double[] coordinates) {
      this.coordinates = coordinates;
    }

    public boolean getAgeLimit() {
      return this.ageLimit;
    }
    public void setAgeLimit(boolean ageLimit) {
      this.ageLimit = ageLimit;
    }

    public boolean getByob() {
      return this.byob;
    }
    public void setByob(boolean byob) {
      this.byob = byob;
    }

    public double getCover() {
      return this.cover;
    }
    public void setCover(double cover) {
      this.cover = cover;
    }
}
