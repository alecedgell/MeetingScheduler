package com.example.demo.model;

import javax.persistence.*;
import java.sql.Date;
import java.util.List;

@Entity
//@Table(name = "meeting")

public class Meeting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private int meeting_id;

    @Column
    private Date meeting_starttime;

    @Column
    private Date meeting_endtime;

    @Column
    private String meeting_feedback;

    @Column
    private int location_id;

//    private List<Integer> user_id;

    public int getMeeting_id() {
        return meeting_id;
    }

    public void setMeeting_id(int meeting_id) {
        this.meeting_id = meeting_id;
    }

    public Date getMeeting_starttime() {
        return meeting_starttime;
    }

    public void setMeeting_starttime(Date meeting_starttime) {
        this.meeting_starttime = meeting_starttime;
    }

    public Date getMeeting_endtime() {
        return meeting_endtime;
    }

    public void setMeeting_endtime(Date meeting_endtime) {
        this.meeting_endtime = meeting_endtime;
    }

    public String getMeeting_feedback() {
        return meeting_feedback;
    }

    public void setMeeting_feedback(String meeting_feedback) {
        this.meeting_feedback = meeting_feedback;
    }

    public int getLocation_id() {
        return location_id;
    }

    public void setLocation_id(int location_id) {
        this.location_id = location_id;
    }

//    public List<Integer> getUser_id() {
//        return user_id;
//    }
//
//    public void setUser_id(List<Integer> user_id) {
//        this.user_id = user_id;
//    }
}
