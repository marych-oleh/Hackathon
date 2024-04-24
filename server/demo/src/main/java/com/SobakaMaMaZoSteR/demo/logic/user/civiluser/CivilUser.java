package com.SobakaMaMaZoSteR.demo.logic.user.civiluser;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.CivilRequest;
import com.SobakaMaMaZoSteR.demo.logic.user.User;
import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

/**
 * Civil User extends a basic User;
 * --
 */
@Getter
@Setter
@NoArgsConstructor
@Document(collection = "civil_user")
public class CivilUser extends User {
    private List<CivilRequest> createdCivilRequest;

    public CivilUser(User other) {
        super(other);
        this.createdCivilRequest = new ArrayList<>();
    }
}
