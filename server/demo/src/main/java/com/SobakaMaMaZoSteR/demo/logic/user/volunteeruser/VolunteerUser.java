package com.SobakaMaMaZoSteR.demo.logic.user.volunteeruser;

import com.SobakaMaMaZoSteR.demo.logic.civilrequest.CivilRequest;
import com.SobakaMaMaZoSteR.demo.logic.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@Document(collection = "volunteer_user")
public class VolunteerUser extends User {
    private String passport;
    private Integer trustRate;
    private List<CivilRequest> currentRequestList;
}
