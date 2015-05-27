package models;

import net.sf.oval.constraint.Length;
import net.sf.oval.constraint.NotEmpty;
import net.sf.oval.constraint.NotNull;

import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name = "Department")

public class Department extends Model implements Serializable {

    @Id
    @Column(name = "idDepartment")
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Integer id;

    @Column(name = "title")
    @NotNull(message = "Title must be correct")
    @NotEmpty(message = "Title must not be empty")
    @Length(max = 24, message = "Title must not be more then 24 characters")
    private String title;

    @OneToMany(mappedBy = "department", cascade=CascadeType.ALL)

//    private Set<Employee> employees;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

//    public Set<Employee> getEmployees() {
//        return employees;
//    }
//
//    public void setEmployees(Set<Employee> employees) {
//        this.employees = employees;
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Department that = (Department) o;

        if (id != null ? !id.equals(that.id) : that.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
