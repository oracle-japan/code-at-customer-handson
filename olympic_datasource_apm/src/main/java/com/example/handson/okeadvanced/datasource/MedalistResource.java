
package com.example.handson.okeadvanced.datasource;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;

import java.util.List;
import javax.ws.rs.core.HttpHeaders;

@Path("/medalist")
public class MedalistResource {

    @PersistenceContext(unitName = "test")
    private EntityManager entityManager;

    @GET
    @Path("/v1")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Medalist> getMedalistsV1(@Context HttpHeaders httpHeaders) {
        return entityManager.createNamedQuery("getBronzeMedalists", Medalist.class).getResultList();
    }

    @GET
    @Path("/v2")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Medalist> getMedalistsV2() {
        return entityManager.createNamedQuery("getSilverMedalists", Medalist.class).getResultList();
    }

    @GET
    @Path("/v3")
    @Produces(MediaType.APPLICATION_JSON)
    public List<Medalist> getMedalistsV3() {
        return entityManager.createNamedQuery("getGoldMedalists", Medalist.class).getResultList();
    }
}
