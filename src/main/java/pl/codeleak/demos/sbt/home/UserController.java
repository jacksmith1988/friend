package pl.codeleak.demos.sbt.home;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import pl.codeleak.demos.sbt.entity.SysUser;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Controller
public class UserController {

    //登出操作
    @RequestMapping({"/mylogout"})
    public String logout(HttpServletRequest request, HttpServletResponse response) {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth != null) {//清除认证
            new SecurityContextLogoutHandler().logout(request, response, auth);
        }
        //重定向到指定页面
        return "redirect:/index";
    }

    @PostMapping({"/regist"})
    public String regist(SysUser sysUser, RedirectAttributes attr) {
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        if (auth != null) {//清除认证
//            new SecurityContextLogoutHandler().logout(request, response, auth);
//        }
        attr.addFlashAttribute("message","注册成功");
        //重定向到指定页面
        return "redirect:/index";
    }

    @GetMapping({"/signup.html"})
    public String signup() {
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//        if (auth != null) {//清除认证
//            new SecurityContextLogoutHandler().logout(request, response, auth);
//        }
//        attr.addFlashAttribute("message","注册成功");
        //重定向到指定页面
        return "regist";
    }


    @GetMapping({"/{action}.html"})
    public String match(@PathVariable String action) {
        return action;
    }


//    @RequestMapping({"/loginPage"})
//    public String login(HttpServletRequest request, HttpServletResponse response) {
//        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
//
//        //重定向到指定页面
//        return "login";
//    }
}
