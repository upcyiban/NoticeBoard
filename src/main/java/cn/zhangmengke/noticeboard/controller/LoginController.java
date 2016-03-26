package cn.zhangmengke.noticeboard.controller;

import cn.zhangmengke.noticeboard.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by echao on 2016/3/21.
 */
@Controller
public class LoginController {

    @Autowired
    private LoginService loginService;

    @RequestMapping(value = "/",method = RequestMethod.GET,params = "verify_request")
    public String NoticeList(String verify_request) throws Exception{
        return loginService.loginPro(verify_request);
    }
    @RequestMapping(value = "/",method = RequestMethod.GET)
    public String testOuath(Model model){
        return loginService.testOauthSer(model);
    }
}
