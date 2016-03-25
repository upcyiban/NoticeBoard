package cn.zhangmengke.noticeboard.model;

import javax.persistence.*;
import java.sql.Timestamp;

/**
 * Created by echao on 2016/3/21.
 */
@Entity
@Table(name = "noticeList")
public class NoticeList {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private int yibanid;
    private String yibanname;
    private String content;
    private Timestamp publishtime;
    private int state;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public int getYibanid() {
        return yibanid;
    }

    public void setYibanid(int yibanid) {
        this.yibanid = yibanid;
    }

    public String getYibanname() {
        return yibanname;
    }

    public void setYibanname(String yibanname) {
        this.yibanname = yibanname;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Timestamp getPublishtime() {
        return publishtime;
    }

    public void setPublishtime(Timestamp publishtime) {
        this.publishtime = publishtime;
    }

    public int getState() {
        return state;
    }

    public void setState(int state) {
        this.state = state;
    }
}
