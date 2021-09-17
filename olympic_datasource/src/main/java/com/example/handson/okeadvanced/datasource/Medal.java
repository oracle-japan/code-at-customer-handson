
package com.example.handson.okeadvanced.datasource;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

/**
 * A Pokemon entity class. A Pokemon is represented as a triple of an ID, a name
 * and a type.
 *
 * Pokémon, and Pokémon character names are trademarks of Nintendo.
 */
@Entity(name = "Medal")
@Table(name = "MEDAL")
@Access(AccessType.PROPERTY)
@NamedQuery(name = "getMedals", query = "SELECT m FROM Medal m")
public class Medal {

    private int id;

    private String name;

    public Medal() {
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
}
