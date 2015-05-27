package web;

import models.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.propertyeditors.CustomDateEditor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import service.DataService;
import utils.exceptions.DataBaseException;
import utils.forms.EmployeeForm;
import utils.validators.OvalValidator;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@Controller
@RequestMapping(value = "/employees")
public class EmployeeController {

    @Autowired
    private DataService dataService;

    @Autowired
    private OvalValidator ovalValidator;

    @RequestMapping(value = "/list/{id}")
    @ResponseBody
    public List sendListFromDatabase(@PathVariable int id) throws DataBaseException {
        List emp = dataService.getEmloyeeListById(id);
        if (emp.size() == 0) {
            emp.add(id);
        }
        return emp;
    }

    @RequestMapping(value = "/edit/{id}")
    @ResponseBody
    public Employee sendEmployee(@PathVariable int id) throws DataBaseException {
        return dataService.getEmloyeeById(id);
    }


    @RequestMapping(value = "/create", method = RequestMethod.POST)
    @ResponseBody
    public String createDepartment(@RequestBody EmployeeForm form) throws DataBaseException {
        form.setId(0);
        Employee emp = createEmployeFromView(form);
        if (isEmployeeValid(emp)) {
            dataService.createEmployee(emp);
            return "OK";
        }
        return "FALSE";
    }

    @RequestMapping(value = "/edit", method = RequestMethod.POST)
    @ResponseBody
    public String editEmployee(@RequestBody EmployeeForm form) throws DataBaseException {
        Employee emp = createEmployeFromView(form);
        if (isEmployeeValid(emp)) {
            dataService.editEmployee(emp);
            return "OK";
        }
        return "FALSE";
    }

    @RequestMapping(value = "/delete/{id_dep}/{id}", method = RequestMethod.GET)
    @ResponseBody
    public List deleteEmployee(@PathVariable("id") int id, @PathVariable("id_dep") int id_dep) throws DataBaseException {
        dataService.deleteById(id);
        return dataService.getEmloyeeListById(id_dep);
    }

    private boolean isEmployeeValid(Employee emp) {
        return ovalValidator.validateModel(emp).size() <= 0;
    }

    @InitBinder
    private void dateBinder(WebDataBinder binder) {
        //The date format to parse or output your dates
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");
        //Create a new CustomDateEditor
        CustomDateEditor editor = new CustomDateEditor(dateFormat, true);
        //Register it as custom editor for the Date type
        binder.registerCustomEditor(Date.class, editor);
    }

    private Employee createEmployeFromView(EmployeeForm form) {
        Employee emp = new Employee();
        emp.setJob_title(form.getJobTitle());
        emp.setFirst_name(form.getFirstName());
        emp.setSecond_name(form.getSecondName());
        emp.setSalary(form.getSalary());
        emp.setDate(form.getDate());
        emp.setDep_id(form.getId_dep());
        if (form.getId() != 0) {
            emp.setId(form.getId());
        }
        return emp;
    }
}
