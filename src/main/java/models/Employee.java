package models;

import net.sf.oval.constraint.*;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "Employee")

public class Employee extends Model implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Integer id;

    @Column(name = "id_dep")
    private Integer dep_id;

    @Column(name = "title")
    @NotNull(message = "Your Title is null")
    @NotEmpty(message = "Your Title is blank")
    @Length(max = 32, message = "max digits = 32")
    private String job_title;

    @NotNull(message = "Your First Name is null")
    @NotEmpty(message = "Your First Name is blank")
    @Length(max = 32, message = "max digits = 32")
    @Column(name = "first_name")
    private String first_name;

    @NotNull(message = "Your Second Name is null")
    @NotEmpty(message = "Your Second Name is blank")
    @Length(max = 32, message = "max digits = 32")
    @Column(name = "second_name")
    private String second_name;

    @NotNull(message = "Your salary is blank")
    @Range(min = 10, max = 1000000, message = "Enter value in a range from 10 to 1000000")
    @NotEmpty(message = "Your Salary is blank")
    @Column(name = "salary")
    private Integer salary;

    @NotNull(message = "Your date is incorrect, please, enter a value in a range from 1990-01-01 till now")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @DateRange(format = "yyyy-MM-dd", min = "1990-01-01", max = "now", message = "Enter a date between 1990-01-01 and today")
    @Column(name = "date")
    @Temporal(value = TemporalType.DATE)
    private Date date;

//    @ManyToOne
//    @JoinColumn(name = "id_dep", insertable = false, updatable = false)
//    private Department department;

    public int getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public int getDep_id() {
        return dep_id;
    }

    public void setDep_id(int dep_id) {
        this.dep_id = dep_id;
    }

    public String getJob_title() {
        return job_title;
    }

    public void setJob_title(String job_title) {
        this.job_title = job_title;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getSecond_name() {
        return second_name;
    }

    public void setSecond_name(String second_name) {
        this.second_name = second_name;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

//    public Department getDepartment() {
//        return department;
//    }
//
//    public void setDepartment(Department department) {
//        this.department = department;
//    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Employee employee = (Employee) o;

        if (id != null ? !id.equals(employee.id) : employee.id != null) return false;

        return true;
    }

    @Override
    public int hashCode() {
        return id != null ? id.hashCode() : 0;
    }
}
