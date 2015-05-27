package web;

import models.Department;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import service.DataService;
import utils.exceptions.DataBaseException;
import utils.validators.OvalValidator;

import java.util.List;

@Controller
public class DepartmentController {

    @Autowired
    private DataService dataService;

    @Autowired
    private OvalValidator ovalValidator;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String printWelcome() throws DataBaseException {
        return "main";
    }

    @RequestMapping(value = "departmentList", method = RequestMethod.GET)
    @ResponseBody
    public List sendListFromDatabase() throws DataBaseException {
        return dataService.getDepartmentList();
    }

    @RequestMapping(value = "edit/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Department sendDepartmentFromDatabase(@PathVariable int id) throws DataBaseException {
        return dataService.getDepartmentById(id);
    }

    @RequestMapping(value = "delete/{id}", method = RequestMethod.GET)
    @ResponseBody
    public List deleteDepartmentFromDatabase(@PathVariable int id) throws DataBaseException {
        dataService.deleteDepartment(id);
        return dataService.getDepartmentList();
    }

    @RequestMapping(value = "create", method = RequestMethod.POST)
    @ResponseBody
    public String createDepartment(@RequestParam("title") String title) throws DataBaseException {
        if (isDepartmentValid(title)) {
            dataService.createDepartment(title);
            return "OK";
        } else {
            return "FALSE";
        }
    }

    @RequestMapping(value = "edit", method = RequestMethod.POST)
    @ResponseBody
    public String editDepartment(@RequestParam("title") String title, @RequestParam("id") int id) throws DataBaseException {
        Department dep = new Department();
        dep.setId(id);
        dep.setTitle(title);
        if (isDepartmentValid(title)) {
            dataService.editDepartment(dep);
            return "OK";
        } else {
            return "FALSE";
        }
    }

    private boolean isDepartmentValid(String title) {
        Department dep = new Department();
        dep.setTitle(title);
        return ovalValidator.validateModel(dep).size() <= 0;
    }
}