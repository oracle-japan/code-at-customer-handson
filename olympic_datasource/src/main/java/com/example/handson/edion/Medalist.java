
package com.example.handson.edion;

import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity(name = "Medalist")
@Table(name = "MEDALIST")
@Access(AccessType.PROPERTY)
@NamedQueries({ @NamedQuery(name = "getGoldMedalists", query = "SELECT ml FROM Medalist ml WHERE ml.medal.id = 1"),
        @NamedQuery(name = "getSilverMedalists", query = "SELECT ml FROM Medalist ml WHERE ml.medal.id = 2"),
        @NamedQuery(name = "getBronzeMedalists", query = "SELECT ml FROM Medalist ml WHERE ml.medal.id = 3") })
public class Medalist {

    private int id;

    private String name;

    @JsonbTransient
    private Medal medal;

    private String color;

    public Medalist() {
    }

    @Id
    @Column(name = "ID", nullable = false, updatable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Basic(optional = false)
    @Column(name = "NAME", nullable = false)
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @ManyToOne
    public Medal getMedal() {
        return medal;
    }

    public void setMedal(Medal medal) {
        this.medal = medal;
        this.color = medal.getName();
    }

    @Transient
    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
