package meetingapi.Model;

public class User {
    private int user_id;
    private int user_phone;
    private String user_email;
    private String user_name;
    private String user_password;
    private String user_type;
    private String user_cv;
    private String user_coverletter;
    private String user_statement;

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public int getUser_phone() {
        return user_phone;
    }

    public void setUser_phone(int user_phone) {
        this.user_phone = user_phone;
    }

    public String getUser_email() {
        return user_email;
    }

    public void setUser_email(String user_email) {
        this.user_email = user_email;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getUser_password() {
        return user_password;
    }

    public void setUser_password(String user_password) {
        this.user_password = user_password;
    }

    public String getUser_type() {
        return user_type;
    }

    public void setUser_type(String user_type) {
        this.user_type = user_type;
    }

    public String getUser_cv() {
        return user_cv;
    }

    public void setUser_cv(String user_cv) {
        this.user_cv = user_cv;
    }

    public String getUser_coverletter() {
        return user_coverletter;
    }

    public void setUser_coverletter(String user_coverletter) {
        this.user_coverletter = user_coverletter;
    }

    public String getUser_statement() {
        return user_statement;
    }

    public void setUser_statement(String user_statement) {
        this.user_statement = user_statement;
    }
}
