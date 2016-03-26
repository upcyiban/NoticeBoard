package cn.zhangmengke.noticeboard.controller;

import cn.zhangmengke.noticeboard.service.GetNews;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by echao on 2016/3/26.
 */
@Controller
public class PublicController {
    @Autowired
    private GetNews getNews;

    @RequestMapping(value = "publicnews" ,method = RequestMethod.GET)
    public String getNews(String content){
        return getNews.saveNoticeNews(content);
    }

    
}
