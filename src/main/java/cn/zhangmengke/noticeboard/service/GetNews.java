package cn.zhangmengke.noticeboard.service;

import cn.zhangmengke.noticeboard.model.NoticeList;
import cn.zhangmengke.noticeboard.model.NoticeListDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpSession;
import java.sql.Timestamp;

/**
 * Created by echao on 2016/3/26.
 */
@Service
public class GetNews {

    @Autowired
    private HttpSession httpSession;

    @Autowired
    private NoticeListDao noticeListDao;

    public String saveNoticeNews(String content){
        int yibanid = (int) httpSession.getAttribute("userid");
        String yibanname = (String) httpSession.getAttribute("username");
        Timestamp timenow = new Timestamp((System.currentTimeMillis()));
        NoticeList noticeList = new NoticeList();
        noticeList.setYibanid(yibanid);
        noticeList.setYibanname(yibanname);
        noticeList.setContent(content);
        noticeList.setState(0);
        noticeListDao.save(noticeList);
        return "finished";
    }
}
