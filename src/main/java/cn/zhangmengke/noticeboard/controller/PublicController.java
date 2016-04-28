package cn.zhangmengke.noticeboard.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by echao on 2016/3/26.
 */
@Controller
public class PublicController {
    @RequestMapping(value = "publicnews" ,method = RequestMethod.GET)
    public String getNews(){
        return "false";
    }

}
