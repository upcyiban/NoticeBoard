package cn.zhangmengke.noticeboard.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;

/**
 * Created by echao on 2016/3/26.
 */
@Service
public class GetNews {

    @Autowired
    private HttpSession httpSession;

    public String saveNoticeNews(String content){

        int yibanid = (int) httpSession.getAttribute("userid");
        return "error";
    }
}
