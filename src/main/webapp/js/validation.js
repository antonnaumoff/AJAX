var validator = {

    showError: function (container, errorMessage) {

        var msgElem = document.createElement('span');
        msgElem.className = "alarma";
        msgElem.innerHTML = errorMessage;
        container.appendChild(msgElem);
    },

    resetError: function (container) {
        $(".alarma").remove();

    },

    validateDepartmentForm: function (event) {
        var form = event.data.form;
        validator.resetError(form[0][0].parentNode);
        var value = form[0][0].value;
        var flag = true;
        if (!value || value.trim().length < 1) {
            validator.showError(form[0][0].parentNode, 'Title must not be empty');
            flag = false;
        }
        if (value.length > 24) {
            validator.showError(form[0][0].parentNode, 'Title must not be more then 24 characters');
            flag = false;
        }
        if (flag == true) {
            validator.submitDepartmentForm(form);
        }
    },

    validateEmployeeForm: function (event) {
        var form = event.data.form;
        validator.resetError(form[0][0].parentNode);
        validator.resetError(form[0][1].parentNode);
        validator.resetError(form[0][2].parentNode);
        validator.resetError(form[0][3].parentNode);
        validator.resetError(form[0][4].parentNode);
        var jobTitle = form[0][0].value;
        var flag = true;
        if (!jobTitle || jobTitle.trim().length < 1) {
            validator.showError(form[0][0].parentNode, 'Job Title must not be empty');
            flag = false;
        }
        if (jobTitle.length > 32) {
            validator.showError(form[0][0].parentNode, 'Job Title must not be more then 32 characters');
            flag = false;
        }

        var firstName = form[0][1].value;
        if (!firstName || firstName.trim().length < 1) {
            validator.showError(form[0][1].parentNode, 'First Name must not be empty');
            flag = false;
        }
        if (firstName.length > 32) {
            validator.showError(form[0][1].parentNode, 'First Name must not be more then 32 characters');
            flag = false;
        }

        var secondName = form[0][2].value;
        if (!secondName || secondName.trim().length < 1) {
            validator.showError(form[0][2].parentNode, 'Second Name must not be empty');
            flag = false;
        }
        if (secondName.length > 32) {
            validator.showError(form[0][2].parentNode, 'Second  Name must not be more then 32 characters');
            flag = false;
        }

        var salary = form[0][3].value;
        if (salary < 10 || salary > 1000000 || isNaN(parseInt(salary))) {
            validator.showError(form[0][3].parentNode, 'Enter value in a range from 10 to 1000000');
            flag = false;
        }

        var date = form[0][4].value;
        var dateArr = date.split("-");

        var year = dateArr[0];
        var month = dateArr[1];
        var day = dateArr[2];

        if (dateArr.length != 3 || year.length != 4 || isNaN(parseInt(year)) || month.length != 2 ||
            isNaN(parseInt(month)) || day.length != 2 || isNaN(parseInt(day)) || year < 1990 ||
            month < 1 || month > 12 || day < 1 || day > 31) {
            validator.showError(form[0][4].parentNode, 'Please enter a valid date in format yyyy-mm-dd ');
            flag = false;
        }

        var enteredDate = new Date(year, month - 1, day);
        if (enteredDate < new Date(1990, 0, 1) || enteredDate > new Date()) {
            validator.showError(form[0][4].parentNode, 'Please, enter a date between 1990-01-01 and today');
            flag = false;
        }

        if (flag == true) {
            validator.submitEmployeeForm(form);
        }
    },

    submitEmployeeForm: function (form) {
        var url = form.attr("act");
        var formObj = {
            jobTitle: form[0][0].value,
            firstName: form[0][1].value,
            secondName: form[0][2].value,
            salary: form[0][3].value,
            date: form[0][4].value,
            id_dep: form[0][5].value
        };
        if (url.split("/")[2] == "edit") {
            formObj.id = form[0][6].value;
        }
        var id_dep = $("#id_dep").val();
        caller.sendEmployeeForm(formObj, url, id_dep);
    },

    submitDepartmentForm: function (form) {
        var url = form.attr("act");
        caller.sendDepartmentForm(form, url);
    }
};




