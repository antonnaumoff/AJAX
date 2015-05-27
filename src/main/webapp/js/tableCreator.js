var pageMaker = {

    createDepartmentTable: function (data) {
        pageMaker.clean();
        var container = $("#dep-table-container");
        var panelPrimary = $('<div>', {
            id: "primary",
            class: "panel panel-primary"
        });
        var header = $('<div/>', {
            class: "panel-heading"
        });
        container.append(panelPrimary);
        panelPrimary.append(header);

        var headerTitle = $('<div/>', {
            class: "custom",
            text: "Departments List"
        });
        $(".panel-heading").append(headerTitle);

        var table = $('<table/>', {
            class: "table-striped"
        });
        panelPrimary.append(table);

        var thead = $('<thead/>', {
            id: "thead"
        });
        table.append(thead);

        var tableHeader = $('<tr/>', {
            class: "table-header"
        });
        $("#thead").append(tableHeader);

        var cell1 = $('<td/>', {
            text: "Title"
        });

        tableHeader.append(cell1);

        tableHeader.append('<td class = \'my-table-cell3\'/>');
        tableHeader.append('<td class = \'my-table-cell3\'/>');
        var cell2 = $('<td/>', {
            class: "my-table-cell3"
        });
        var buttonForCreateForm = $("<button/>", {
            type: "button",
            class: "btn btn-default btn-lg",
            id: "createDepartmentForm"

        });
        var spanForCreateForm = $("<span/>", {
            class: "glyphicon glyphicon-plus"
        });
        buttonForCreateForm.append(spanForCreateForm);
        cell2.append(buttonForCreateForm);

        $(".table-header").append(cell2);

        var tbody = $("<tbody/>", {id: "tBody"});
        $(".table-striped").append(tbody);

        //handler for create button
        $("#createDepartmentForm").on("click", {id: 0}, pageMaker.createDepartmentForm);

        for (var key in data) {
            var id = data[key].id;
            var spanForRemove = $("<span/>", {class: "glyphicon glyphicon-remove"});
            var buttonForRemove = $("<button/>", {
                    type: "submit",
                    class: "btn btn-default btn-lg",
                    id: "delete" + id
                }
            );
            buttonForRemove.append(spanForRemove);

            var spanForEdit = $("<span/>", {class: "glyphicon glyphicon-pencil"});
            var buttonForEdit = $("<button/>", {
                type: "submit",
                class: "btn btn-default btn-lg",
                id: "edit" + id
            });
            buttonForEdit.append(spanForEdit);

            var spanForList = $("<span/>", {class: "glyphicon glyphicon-th-list"});
            var buttonForList = $("<button/>", {
                type: "button",
                class: "btn btn-default btn-lg",
                id: "list" + id
            });
            buttonForList.append(spanForList);


            var row = $("<tr/>", {class: "my-table-cell"});
            var cellWithTitle = $("<td/>", {text: data[key].title});
            var cellWithRemove = $("<td/>", {class: "my-table-cell3"});
            cellWithRemove.append(buttonForRemove);
            var cellWithEdit = $("<td/>", {class: "my-table-cell3"});
            cellWithEdit.append(buttonForEdit);
            var cellWithList = $("<td/>", {class: "my-table-cell3"});
            cellWithList.append(buttonForList);
            row.append(cellWithTitle, cellWithRemove, cellWithEdit, cellWithList);
            $("#tBody").append(row);

            $("#edit" + id + ":last").on("click", {id: id}, caller.initDepartmentEdit);
            $("#list" + id + ":last").on("click", {id: id}, caller.initEmployeeList);
            $("#delete" + id + ":last").on("click", {id: id}, caller.deleteDepartment);
        }
    },

    clean: function () {
        $("#dep-table-container #primary").remove();
        $("#emp-table-container #primary").remove();
        $("#dep-form-container #primary").remove();
        $("#emp-form-container #primary").remove();
    },

    createEmployeeTable: function (data) {
        var dep_id;
        if (!isNaN(parseInt(data))) {
            dep_id = data;
        } else {
            dep_id = data[0].dep_id;
        }


        this.clean();
        var container = $("#emp-table-container");
        var panelPrimary = $('<div>', {
            id: "primary",
            class: "panel panel-primary"
        });
        var header = $('<div/>', {
            class: "panel-heading"
        });
        container.append(panelPrimary);
        panelPrimary.append(header);

        var headerTitle = $('<div/>', {
            class: "custom",
            text: "Employees List"
        });
        $(".panel-heading").append(headerTitle);

        var table = $('<table/>', {
            class: "table-striped"
        });
        panelPrimary.append(table);

        var thead = $('<thead/>', {
            id: "thead"
        });
        table.append(thead);

        var tableHeader = $('<tr/>', {
            class: "table-header"
        });
        $("#thead").append(tableHeader);

        var cell1 = $('<td/>', {
            text: "Title"
        });

        var cell2 = $('<td/>', {
            text: "First Name"
        });
        var cell3 = $('<td/>', {
            text: "Second Name"
        });
        var cell4 = $('<td/>', {
            text: "Salary"
        });

        var cell5 = $('<td/>', {
            text: "Date"
        });

        tableHeader.append(cell1);
        tableHeader.append(cell2);
        tableHeader.append(cell3);
        tableHeader.append(cell4);
        tableHeader.append(cell5);
        tableHeader.append('<td class = \'my-table-cell3\'/>');
        tableHeader.append('<td class = \'my-table-cell3\'/>');
        var cell6 = $('<td/>', {
            class: "my-table-cell3"
        });

        var buttonForCreateForm = $("<button/>", {
            type: "submit",
            id: "create",
            class: "btn btn-default btn-lg"
        });

        var spanForCreateForm = $("<span/>", {
            class: "glyphicon glyphicon-plus"
        });
        buttonForCreateForm.append(spanForCreateForm);


        cell6.append(buttonForCreateForm);
        $(".table-header").append(cell6);

        //handler for create button
        $("#create").on("click", {employee: dep_id}, pageMaker.createEmployeeForm);

        var tbody = $("<tbody/>", {id: "tBody"});
        $(".table-striped").append(tbody);

        if (isNaN(parseInt(data))) {
            for (var key in data) {
                var id = data[key].id;
                var id_dep = data[key].dep_id;

                var spanForRemove = $("<span/>", {class: "glyphicon glyphicon-remove"});
                var buttonForRemove = $("<button/>", {
                    type: "submit",
                    id: "delete" + id,
                    class: "btn btn-default btn-lg"
                });

                buttonForRemove.append(spanForRemove);


                var spanForEdit = $("<span/>", {class: "glyphicon glyphicon-pencil"});
                var buttonForEdit = $("<button/>", {
                    type: "submit",
                    id: "edit" + id,
                    class: "btn btn-default btn-lg"
                });
                buttonForEdit.append(spanForEdit);


                var spanForList = $("<span/>", {class: "glyphicon glyphicon-th-list"});
                var buttonForList = $("<button/>", {
                    type: "submit",
                    id: "list" + id,
                    class: "btn btn-default btn-lg"
                });
                buttonForList.append(spanForList);


                var row = $("<tr/>", {class: "my-table-cell"});
                var cellWithTitle = $("<td/>", {text: data[key].job_title});
                var cellWithFirstName = $("<td/>", {text: data[key].first_name});
                var cellWithSecondName = $("<td/>", {text: data[key].second_name});
                var cellWithSalary = $("<td/>", {text: data[key].salary});
                var cellWithDate = $("<td/>", {text: data[key].date});
                var cellWithRemove = $("<td/>", {class: "my-table-cell3"});
                cellWithRemove.append(buttonForRemove);
                var cellWithEdit = $("<td/>", {class: "my-table-cell3"});
                cellWithEdit.append(buttonForEdit);
                var cellWithList = $("<td/>", {class: "my-table-cell3"});
                cellWithList.append(buttonForList);
                row.append(cellWithTitle, cellWithFirstName, cellWithSecondName, cellWithSalary, cellWithDate, cellWithRemove, cellWithEdit, cellWithList);
                $("#tBody").append(row);
                //handler for delete button
                $("#delete" + id + ":last").on("click", {id_dep: id_dep, id: id}, caller.deleteEmployee);
                //handler for edit button
                $("#edit" + id + ":last").on("click", {id: id}, caller.initEmployeeEdit);
                //handler for list button
                $("#list" + id + ":last").on("click", caller.initDepartmentList);
            }
        }
    },
    createDepartmentForm: function (event) {

        var department;
        if (event.data.id != 0) {
            department = event.department;
        }
        var title;
        if (department != undefined) {
            title = "Edit Department";
        } else {
            title = "Create Department"
        }
        pageMaker.clean();

        var container = $("#dep-form-container");
        var panelPrimary = $('<div>', {
            id: "primary",
            class: "panel panel-primary"
        });
        var header = $('<div/>', {
            class: "panel-heading"
        });
        container.append(panelPrimary);
        panelPrimary.append(header);
        var headerTitle = $('<div/>', {
            class: "custom",
            text: title
        });
        $(".panel-heading").append(headerTitle);

        var fluid = $('<div/>', {
            class: "container-fluid"
        });
        var form = $('<form/>', {
            class: "form"
        });

        panelPrimary.append(fluid);
        fluid.append(form);
        var formGroup = $('<div/>', {
            class: "form-group"
        });
        form.append(formGroup);

        if (department != undefined) {
            $(".form").attr("act", "/edit");
        } else {
            $(".form").attr("act", "/create");
        }

        var label = $('<label/>', {
            for: "title",
            text: "Title:"
        });

        var input = $('<input/>', {
            type: "text",
            class: "form-control",
            id: "title",
            name: "title"
        });

        var error = $('<div/>', {
            id: "title_error",
            class: "alarma",
            text: " "
        });

        var button = $('<button/>', {
            type: "button",
            class: "btn btn-default",
            text: "Submit",
            id: "button"
        });

        formGroup.append(label, input, error);
        form.append(button);

        $("#button").on("click", {form: form}, validator.validateDepartmentForm)

        if (department != undefined) {
            $(".form-control").attr("value", department.title);
            var inputId = $('<input/>', {
                type: "hidden",
                name: "id",
                value: department.id
            });
            formGroup.append(inputId);
        }
    },

    createEmployeeForm: function (event) {
        //filter for input data(from onclick - event with dep_id, from ajax - object with employee)
        var employee;
        try {
            employee = event.data.employee
        }
        catch (err) {
            employee = event;
        }

        var title;
        if (isNaN(parseInt(employee))) {
            title = "Edit Employee";
        } else {
            title = "Create Employee"
        }
        pageMaker.clean();

        var container = $("#emp-form-container");
        var panelPrimary = $('<div>', {
            id: "primary",
            class: "panel panel-primary"
        });
        var header = $('<div/>', {
            class: "panel-heading"
        });
        container.append(panelPrimary);
        panelPrimary.append(header);
        var headerTitle = $('<div/>', {
            class: "custom",
            text: title
        });
        $(".panel-heading").append(headerTitle);

        var fluid = $('<div/>', {
            class: "container-fluid"
        });
        var form = $('<form/>', {
            method: "post",
            class: "form"

        });

        panelPrimary.append(fluid);
        fluid.append(form);
        var formGroupTitle = $('<div/>', {

            class: "form-group"
        });


        if (isNaN(parseInt(employee))) {
            $(".form").attr("act", "/employees/edit");
        } else {
            $(".form").attr("act", "/employees/create");
        }

        var label = $('<label/>', {
            for: "jobTitle",
            text: "Title:"
        });

        var input = $('<input/>', {
            type: "text",
            class: "form-control",
            id: "jobTitle",
            name: "jobTitle"
        });

        var error = $('<div/>', {
            id: "title_error",
            class: "alarma",
            text: " "
        });

        formGroupTitle.append(label, input, error);
        form.append(formGroupTitle);

        var formGroupFirstName = $('<div/>', {

            class: "form-group"
        });

        var labelForFirstName = $('<label/>', {
            for: "firstName",
            text: "First Name:"
        });

        var inputForFirstName = $('<input/>', {
            type: "text",
            class: "form-control",
            id: "firstName",
            name: "firstName"
        });

        var errorForFirstName = $('<div/>', {
            id: "title_error",
            class: "alarma",
            text: " "
        });

        formGroupFirstName.append(labelForFirstName, inputForFirstName, errorForFirstName);
        form.append(formGroupFirstName);

        var formGroupSecondName = $('<div/>', {

            class: "form-group"
        });

        var labelForSecondName = $('<label/>', {
            for: "secondName",
            text: "Second Name:"
        });

        var inputForSecondName = $('<input/>', {
            type: "text",
            class: "form-control",
            id: "secondName",
            name: "secondName"
        });

        var errorForSecondName = $('<div/>', {
            id: "title_error",
            class: "alarma",
            text: " "
        });

        formGroupSecondName.append(labelForSecondName, inputForSecondName, errorForSecondName);
        form.append(formGroupSecondName);

        var formGroupSalary = $('<div/>', {

            class: "form-group"
        });

        var labelForSalary = $('<label/>', {
            for: "salary",
            text: "Salary:"
        });

        var inputForSalary = $('<input/>', {
            type: "text",
            class: "form-control",
            id: "salary",
            name: "salary"
        });

        var errorForSalary = $('<div/>', {
            id: "title_error",
            class: "alarma",
            text: " "
        });

        formGroupSalary.append(labelForSalary, inputForSalary, errorForSalary);
        form.append(formGroupSalary);

        var formGroupDate = $('<div/>', {

            class: "form-group"
        });

        var labelForDate = $('<label/>', {
            for: "date",
            text: "Date:"
        });

        var inputForDate = $('<input/>', {
            type: "text",
            class: "form-control",
            id: "date",
            name: "date"
        });


        var errorForDate = $('<div/>', {
            id: "title_error",
            class: "alarma",
            text: " "
        });

        formGroupDate.append(labelForDate, inputForDate, errorForDate);
        form.append(formGroupDate);

        var button = $('<button/>', {
            type: "button",
            class: "btn btn-default",
            text: "Submit",
            id: "button"
        });

        form.append(button);

        if (isNaN(parseInt(employee))) {
            $("#jobTitle").attr("value", employee.job_title);
            $("#firstName").attr("value", employee.first_name);
            $("#secondName").attr("value", employee.second_name);
            $("#salary").attr("value", employee.salary);
            $("#date").attr("value", employee.date);

            var inputIdDep = $('<input/>', {
                id: "id_dep",
                type: "hidden",
                name: "id_dep",
                value: employee.dep_id
            });

            var inputId = $('<input/>', {
                id: "id",
                type: "hidden",
                name: "id",
                value: employee.id
            });

            formGroupDate.append(inputIdDep, inputId);
        } else {
            var inputIdDep = $('<input/>', {
                id: "id_dep",
                type: "hidden",
                name: "id_dep",
                value: employee
            });
            formGroupDate.append(inputIdDep);
        }
        //handler for submit button
        $("#button").on("click", {form: form}, validator.validateEmployeeForm);
    }
};



