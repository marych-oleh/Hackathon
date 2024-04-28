package com.SobakaMaMaZoSteR.demo.logic.user.user_router;

import com.SobakaMaMaZoSteR.demo.logic.user.Role;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "user_router_table")
public class UserRouter {
    @Id
    private String userId;
    private String userEmail;
    //private String oldUserId;
    private Role role;
}
