var caller = {
    initDepartmentList: function () {
        return $.ajax({
            url: "/departmentList",
            method: "GET",
            error: function (jqXHR, textStatus, errorThrown) {
                return console.log(jqXHR, textStatus, errorThrown)
            },
            success: function (departments) {
                return (pageMaker.createDepartmentTable(departments))
            }
        })
    },
    initEmployeeList: function (data) {
        var id;
        if (isNaN(parseInt(data))) {
            id = data.data.id;
        } else {
            id = data;
        }
        return $.ajax({
            url: "/employees/list/" + id,
            error: function (jqXHR, textStatus, errorThrown) {
                return console.log(jqXHR, textStatus, errorThrown)
            },
            success: function (employees) {
                if (!isNaN(parseInt(employees))) {
                    return (pageMaker.createEmployeeTable(id));
                }
                else return (pageMaker.createEmployeeTable(employees));
            }
        })
    },

    initDepartmentEdit: function (event) {
        return $.ajax({
            url: "/edit/" + event.data.id,
            error: function (jqXHR, textStatus, errorThrown) {
                return console.log(jqXHR, textStatus, errorThrown)
            },
            success: function (dep) {
                var myEvent = {
                    data: {
                        id: dep.id
                    },
                    department: dep
                };
                return (pageMaker.createDepartmentForm(myEvent))
            }
        })
    },

    initEmployeeEdit: function (event) {
        return $.ajax({
            url: "/employees/edit/" + event.data.id,
            error: function (jqXHR, textStatus, errorThrown) {
                return console.log(jqXHR, textStatus, errorThrown)
            },
            success: function (employee) {
                return (pageMaker.createEmployeeForm(employee))
            }
        })
    },

    deleteDepartment: function (data) {
        return $.ajax({
            url: "/delete/" + data.data.id,
            error: function (jqXHR, textStatus, errorThrown) {
                return console.log(jqXHR, textStatus, errorThrown)
            },
            success: function (departments) {
                return (pageMaker.createDepartmentTable(departments))
            }
        })
    },
    deleteEmployee: function (event) {
        return $.ajax({
            url: "/employees/delete/" + event.data.id_dep + "/" + event.data.id,
            error: function (jqXHR, textStatus, errorThrown) {
                return console.log(jqXHR, textStatus, errorThrown)
            },
            success: function (employee) {
                if (employee.length == 0) {
                    return pageMaker.createEmployeeTable(event.data.id_dep);
                } else {
                    return (pageMaker.createEmployeeTable(employee));
                }
            }
        })
    },

    sendDepartmentForm: function (form) {
        return $.ajax({
            url: form.attr("act"),
            type: "POST",
            data: $(".form").serialize(),
            error: function (jqXHR, textStatus, errorThrown) {
                return console.log(jqXHR, textStatus, errorThrown)
            },
            success: function (data) {
                if (data == "OK") {
                    return (caller.initDepartmentList());
                }
                else {
                    return alert("You have crashed application");
                }
            }
        })
    },
    sendEmployeeForm: function (form, url, id_dep) {
        return $.ajax({
            url: url,
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(form),
            error: function (jqXHR, textStatus, errorThrown) {
                return console.log(jqXHR, textStatus, errorThrown)
            },
            success: function (data) {
                if (data == "OK") {
                    return (caller.initEmployeeList(id_dep));
                } else {
                    return alert("You have crashed application");
                }
            }
        })
    }
};



