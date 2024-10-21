package pl.codeleak.demos.sbt.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

//@Configuration
@EnableWebSecurity
public class SecSecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
//    private DbUserDetailsService dbUserDetailsService;

//    @Override
//    public void configure(WebSecurity web) {
//        // 忽略前端静态资源 css js 等
//        web.ignoring().antMatchers("/css/**");
//        web.ignoring().antMatchers("/js/**");
//        web.ignoring().antMatchers("/image/**");
//        web.ignoring().antMatchers("/picture/**");
//        web.ignoring().antMatchers("/font/**");
//    }


    //拦截规则设置
    @Override
    protected void  configure(HttpSecurity http) throws Exception {
        http.csrf().disable();
//        http
//        .authorizeRequests()
//        // 匹配 "/" 路径，不需要权限即可访问
//        .antMatchers("/").permitAll()
//        //匹配 "/user" 及其以下所有路径，都需要 "USER" 权限
////        .antMatchers("/user/**").hasAuthority("USER")
//        .and()
//        //登录地址为 "/login"，登录成功默认跳转到页面 "/hai"
//        .formLogin().loginPage("/login").defaultSuccessUrl("/hai")
//        //退出登录的地址为 "/logout"，退出成功后跳转到页面 "/login"
//        .and()
//        //退出登录的地址为 "/logout"，退出成功后跳转到页面 "/login"
//        .logout().logoutUrl("/logout").logoutSuccessUrl("/login");
//        // 默认启用 CSRF  ,必须post才可以访问/logout
        http.formLogin().and()
                //允许基于使用HttpServletRequest限制访问
                .authorizeRequests()
                //设置不拦截页面，可直接通过，路径访问 "/", "/index", "/home" 则不拦截,
                //"/hhk/**" 的意思是 "/hhk" 及其以下所有路径
                .antMatchers("/", "/regist","/signup.html", "/index", "/home","/login","/css/**","/js/**","/image/**","/picture/**","/font/**")
                //是允许所有的意思
                .permitAll()
                //其他页面都要拦截，【需要在最后设置这个】
                .anyRequest().authenticated()

                .and()
//        添加退出登录支持。当使用WebSecurityConfigurerAdapter时，这将自动应用。默认情况是，访问URL”/ logout”，使HTTP Session无效
//        来清除用户，清除已配置的任何#rememberMe()身份验证，清除SecurityContextHolder，然后重定向到”/login?success”
                .logout()
//                //指定的登出操作的虚拟路径，需要以post方式请求这个 http://localhost:5500/mylogout 才可以登出 ，也可以直接清除用户认证信息达到登出目的
                .logoutUrl("/logout")
                //登出成功后访问的地址
                .logoutSuccessUrl("/index").invalidateHttpSession(true);
//                .permitAll();
    }

//    @Override
//    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
//        auth.inMemoryAuthentication()
//                .passwordEncoder(new BCryptPasswordEncoder())//配置密码加密方式，必须与之后密码加密方式一致，不然会登录失败，而且新版中必须设置，不然虽然编译不会报错，使用时会报java.lang.IllegalArgumentException: There is no PasswordEncoder mapped for the id "null"
//                .withUser("user")//用户名
//                .password(new BCryptPasswordEncoder().encode("demo"))//密码
//                .roles("admin")//角色名
//                .and()
//                .withUser("user")
//                .password(new BCryptPasswordEncoder().encode("123"))
//                .roles("vip","user");//多个角色时，直接放入多个变量，此函数参数String...
//    }
//    /**
//     * 添加 UserDetailsService， 实现自定义登录校验
//     */
//    @Override
//    protected void configure(AuthenticationManagerBuilder builder) throws Exception {
//        //注入用户信息，每次登录都会来这查询一次信息，因此不建议每次都向mysql查询，应该使用redis
////        builder.userDetailsService(dbUserDetailsService);
//    }

    /**
     * 密码加密
     */
    @Bean
    public static PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }
}
