
package com.example.handson.okeadvanced.datasource;

import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.MediaType;

import java.util.List;
import jakarta.ws.rs.core.HttpHeaders;

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
