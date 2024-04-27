package com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.entity.CivilRequest;
import com.SobakaMaMaZoSteR.demo.logic.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@Document(collection = "volunteer_user")
public class VolunteerUser extends User {
    private Integer trustRate;
    private List<CivilRequest> currentRequestList;

    public VolunteerUser(User other) {
        super(other);
        this.trustRate = 0;
        this.currentRequestList = new ArrayList<>();
    }
}
