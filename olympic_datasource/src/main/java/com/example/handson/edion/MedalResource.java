
package com.example.handson.edion;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("medal")
public class MedalResource {

    @PersistenceContext(unitName = "test")
    private EntityManager entityManager;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Medal> getMedal() {
        return entityManager.createNamedQuery("getMedals", Medal.class).getResultList();
    }
}
