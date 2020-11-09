package com.example.demo.model;

import java.sql.Date;

public class Location {
    private int location_id;
    private String location_name;
    private Date location_starttime;
    private Date location_endtime;

    public int getLocation_id() {
        return location_id;
    }

    public void setLocation_id(int location_id) {
        this.location_id = location_id;
    }

    public String getLocation_name() {
        return location_name;
    }

    public void setLocation_name(String location_name) {
        this.location_name = location_name;
    }

    public Date getLocation_starttime() {
        return location_starttime;
    }

    public void setLocation_starttime(Date location_starttime) {
        this.location_starttime = location_starttime;
    }

    public Date getLocation_endtime() {
        return location_endtime;
    }

    public void setLocation_endtime(Date location_endtime) {
        this.location_endtime = location_endtime;
    }
}
