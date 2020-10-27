package com.example.demo.controller;

import com.example.demo.dao.MeetingDAO;
import com.example.demo.model.Meeting;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
//@RequestMapping("/api")
public class MeetingController {

    @Autowired
    MeetingDAO dao;

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
}
