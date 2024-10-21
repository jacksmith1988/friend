package pl.codeleak.demos.sbt.entity;

import lombok.Data;

@Data
public class SysUser {
    private static final long serialVersionUID = 4522943071576672084L;
    private Long userId;
    private String username;
    private String password;
    private String userRole;

}
