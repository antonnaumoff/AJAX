<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="<c:url value="/css/my.css"/>" type="text/css">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.1/jquery.min.js"></script>
    <script type="text/javascript" src="<c:url value="/js/ajax.js"/>"></script>
    <script type="text/javascript" src="<c:url value="/js/tableCreator.js"/>"></script>
    <script type="text/javascript" src="<c:url value="/js/validation.js"/>"></script>
    </head>
<body>

<div class="container">
    <div class="row" id="${target}">
        <div class="col-sm-2"></div>
        <div class="col-sm-8">
            <div id="cont"></div>
            <div id="dep-table-container">
                <%--<div id="primary" class="panel panel-primary">--%>
                    <%--<div class="panel-heading">--%>
                        <%--<div class="custom">Departments List</div>--%>
                    <%--</div>--%>


                    <%--<table class="table-striped">--%>
                        <%--<thead>--%>
                        <%--<tr class="table-header">--%>
                            <%--<td>Title</td>--%>
                            <%--<td class="my-table-cell3"></td>--%>
                            <%--<td class="my-table-cell3"></td>--%>
                            <%--<td class="my-table-cell3">--%>

                                <%--<button type="submit" class="btn btn-default btn-lg"--%>
                                        <%--onclick="pageMaker.createDepartmentForm()">--%>
                                    <%--<span class="glyphicon glyphicon-plus"></span>--%>
                                <%--</button>--%>

                            <%--</td>--%>
                        <%--</tr>--%>
                        <%--</thead>--%>

                        <%--<tbody>--%>
                        <%--<c:forEach var="dep" items="${department}">--%>


                            <%--<tr class="my-table-cell">--%>
                                <%--<td><c:out value="${dep.title}"/></td>--%>

                                <%--<td class="my-table-cell3">--%>
                                    <%--<button type="submit" class="btn btn-default btn-lg"--%>
                                            <%--onclick="caller.deleteDepartment(${dep.id})">--%>
                                        <%--<span class="glyphicon glyphicon-remove"></span>--%>
                                    <%--</button>--%>

                                <%--</td>--%>
                                <%--<td class="my-table-cell3">--%>
                                    <%--<button type="submit" class="btn btn-default btn-lg"--%>
                                            <%--onclick="caller.initDepartmentEdit(${dep.id})">--%>
                                        <%--<span class="glyphicon glyphicon-pencil"></span>--%>
                                    <%--</button>--%>


                                <%--</td>--%>

                                <%--<td class="my-table-cell3">--%>

                                    <%--<button type="submit" class="btn btn-default btn-lg"--%>
                                            <%--onclick="caller.initEmployeeList(${dep.id})">--%>
                                        <%--<span class="glyphicon glyphicon-th-list"></span>--%>
                                    <%--</button>--%>

                                <%--</td>--%>
                            <%--</tr>--%>
                        <%--</c:forEach>--%>

                        <%--</tbody>--%>
                    <%--</table>--%>
                <%--</div>--%>
            </div>

            <div id="emp-table-container"></div>
            <div id="dep-form-container"></div>
            <div id="emp-form-container"></div>
        </div>
        <div class="col-sm-2"></div>
    </div>
</div>
<script>window.onload=caller.initDepartmentList()</script>>
</body>

