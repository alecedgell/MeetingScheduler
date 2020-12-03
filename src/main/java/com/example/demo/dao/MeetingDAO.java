package com.example.demo.dao;
import com.example.demo.model.Meeting;
import com.example.demo.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.util.List;
import java.util.Map;

@Repository
public class MeetingDAO {

    @Autowired
    JdbcTemplate jdbcTemplate;

    //added to test getting all candidates
    public List<Map<String, Object>> getUserType(String userType) {
        String sql = "select user_id, user_name, user_email from all_user where user_type='"+userType+"'";
        return jdbcTemplate.queryForList(sql);
    }

    public List<Map<String,Object>> getUser(String email,String password){
        String sql="select * from all_user where user_email='"+email+"' and user_password='"+password+"'";
        return jdbcTemplate.queryForList(sql);
    }
    public List<Map<String,Object>> getMeetings(int id){
        String sql="select * from meeting where meeting_id=any(select meeting_id from participation where user_id="+id+")";
        return jdbcTemplate.queryForList(sql);
    }
    public List<Map<String,Object>> getPeople(int id){
        String sql="select * from all_user where user_id=any(select user_id from participation where meeting_id="+id+")";
        return jdbcTemplate.queryForList(sql);
    }
    public List<Map<String,Object>> getPosition(int id){
        String sql="select * from interview_position where position_id=any(select position_id from all_schedule where user_id="+id+")";
        return jdbcTemplate.queryForList(sql);
    }
    public List<Map<String,Object>> getLocation(int id){
        String sql="select * from location where location_id="+id;
        return jdbcTemplate.queryForList(sql);
    }
    public void insertMeeting(Meeting meeting){
        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
        String sql="insert into meeting values(null,?,?,?,?)";
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, new String[]{"meeting_id"});
            ps.setDate(1, meeting.getMeeting_starttime());
            ps.setDate(2, meeting.getMeeting_endtime());
            ps.setString(3,meeting.getMeeting_feedback());
            ps.setInt(4,meeting.getLocation_id());
            return ps;
        },keyHolder);
//        insertParticipation(meeting.getUser_id(),keyHolder.getKey().intValue());
    }
    public void insertParticipation(List<Integer> user,int meeting){
        for(int i=0;i<user.size();i++) {
            String sql = "insert into participation values("+user.get(i)+","+meeting+","+null+")";
            jdbcTemplate.update(sql);
        }
    }
    public void insertUser(User user){
        String sql="insert into all_user values(null,"+
                user.getUser_phone()+
                ",'"+user.getUser_email()+
                "','"+user.getUser_name()+
                "','"+user.getUser_password()+
                "','"+user.getUser_type()+
                "','"+user.getUser_cv()+
                "','"+user.getUser_coverletter()+
                "','"+user.getUser_statement()+"')";
        jdbcTemplate.update(sql);
    }
    public void deleteUser(int id){
        String sql="delete from all_user where user_id="+id;
        jdbcTemplate.update(sql);
    }

    public void deleteUserFromMeeting(int user_id, int meeting_id){
        String sql="delete from participation where user_id="+user_id+" and meeting_id="+meeting_id;
        jdbcTemplate.update(sql);
    }
    public void updateFeedback(Meeting meeting){
        String sql="update meeting set meeting_feedback='"+meeting.getMeeting_feedback()+"' where meeting_id="+meeting.getMeeting_id();
        jdbcTemplate.update(sql);
    }

    public void updateMeetingTime(Meeting meeting){
        String sql="update meeting set meeting_starttime='"+meeting.getMeeting_starttime()+
                "', meeting_endtime='"+meeting.getMeeting_endtime()+
                "' where meeting_id="+meeting.getMeeting_id();
        jdbcTemplate.update(sql);
    }
}

