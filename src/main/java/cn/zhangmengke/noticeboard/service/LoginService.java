package cn.zhangmengke.noticeboard.service;

import cn.zhangmengke.noticeboard.conflg.DevConfig;
import cn.zhangmengke.noticeboard.model.NoticeList;
import cn.zhangmengke.noticeboard.model.NoticeListDao;
import cn.zhangmengke.noticeboard.session.SessionUser;
import cn.zhangmengke.noticeboard.util.MCrypt;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;

import javax.servlet.http.HttpSession;

/**
 * Created by echao on 2016/3/21.
 */
@Service
public class LoginService {

    @Autowired
    private HttpSession httpSession;

    @Autowired
    private NoticeListDao noticeListDao;

    public String loginPro(String verify_request) throws Exception {
        MCrypt mCrypt = new MCrypt();
        String output = new String(mCrypt.decrypt(verify_request));
        saveService(output);
        return "redirect:/";
    }
    public String testOauthSer(Model model){
        String username = (String) httpSession.getAttribute("username");
        if(username != null){
            Iterable<NoticeList> noticeLists = noticeListDao.findAll();
            model.addAttribute("noticeLists",noticeLists);
            return "index";
        }
        return"redirect:https://openapi.yiban.cn/oauth/authorize?client_id=" + DevConfig.client_id + "&redirect_uri=" + DevConfig.redirect_uri;
    }

    public String saveService(String s){
        Gson gson = new Gson();
        try {
            SessionUser sessionUser = gson.fromJson(s,SessionUser.class);
            httpSession.setAttribute("userid",sessionUser.visit_user.userid);
            httpSession.setAttribute("username",sessionUser.visit_user.username);
            return "success";
        }catch (Exception ex){
            ex.printStackTrace();
            return "error";
        }
    }
}

