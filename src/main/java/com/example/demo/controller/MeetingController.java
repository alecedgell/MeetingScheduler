package com.example.demo.controller;

import com.example.demo.dao.MeetingDAO;
import com.example.demo.model.Meeting;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class MeetingController {

    @Autowired
    MeetingDAO dao;


    //getting user based upon user_type
    @GetMapping(value = "/getUserType/{user_type}")
    public List<Map<String, Object>> getUserType(@PathVariable("user_type") String user_type) {
        return dao.getUserType(user_type);
    }

    @GetMapping(value="/getUser/{email}/{password}")
    public List<Map<String,Object>> getUser(@PathVariable("email") String email, @PathVariable("password") String password){
        return dao.getUser(email,password);
    }

    @GetMapping(value="/getMeetings/{user_id}")
    public List<Map<String,Object>> getUser(@PathVariable("user_id")int user_id){
        return dao.getMeetings(user_id);
    }

    @GetMapping(value="/getPeople/{meeting_id}")
    public List<Map<String,Object>> getPeople(@PathVariable("meeting_id")int meeting_id){
        return dao.getPeople(meeting_id);
    }

    @GetMapping(value="/getPosition/{user_id}")
    public List<Map<String,Object>> getPosition(@PathVariable("user_id")int user_id){
        return dao.getPosition(user_id);
    }

    @GetMapping(value="/getLocation/{location_id}")
    public List<Map<String,Object>> getLocation(@PathVariable("location_id")int location_id){
        return dao.getLocation(location_id);
    }

    @PostMapping(value="/insertMeeting")
    public void insertMeeting(@RequestBody Meeting meeting){
        dao.insertMeeting(meeting);
    }

    @PostMapping(value="/insertUser")
    public void insertUser(@RequestBody User user){
        dao.insertUser(user);
    }
    @DeleteMapping(value="/deleteUser/{user_id}")
    public void deleteUser(@PathVariable("user_id")int user_id){
        dao.deleteUser(user_id);
    }

    @DeleteMapping(value="/deleteUserFromMeeting/{user_id}/{meeting_id}")
    public void deleteUserFromMeeting(@PathVariable("user_id")int user_id,
                                      @PathVariable("meeting_id")int meeting_id){
        dao.deleteUserFromMeeting(user_id,meeting_id);
    }

    @PutMapping(value = "/updateFeedback")
    public void updateFeedback(@RequestBody Meeting meeting){
        dao.updateFeedback(meeting);
    }



    @PutMapping(value = "/updateMeetingTime")
    public void updateMeetingTime(@RequestBody Meeting meeting){
        dao.updateMeetingTime(meeting);
    }

    @PutMapping(value = "/updateAlert/{meeting_id}/{user_id}/{alert_type}")
    public void updateAlert(@PathVariable("user_id")int user_id,
                            @PathVariable("meeting_id")int meeting_id,
                            @PathVariable("alert_type")String alert_type){
        dao.updateAlert(meeting_id,user_id,alert_type);
    }
    @PutMapping(value = "/updateUser")
    public void updateUser(@RequestBody User user){
        dao.updateUser(user);
    }
    @GetMapping(value="/getUserByID/{user_id}")
    public List<Map<String,Object>> getUserByID(@PathVariable("user_id")int user_id){
        return dao.getUserByID(user_id);
    }
}
