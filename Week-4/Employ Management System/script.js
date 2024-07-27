class Employee {
    constructor(name, age, department, salary) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
    }
}

const employees = [];

function addEmployee() {
    const name = document.getElementById('employeeName').value;
    const age = document.getElementById('employeeAge').value;
    const department = document.getElementById('employeeDepartment').value;
    const salary = document.getElementById('employeeSalary').value;

    if (name && age && department && salary) {
        const employee = new Employee(name, age, department, salary);
        employees.push(employee);
        showAllEmployees();
        resetForm();
    } else {
        alert("Please fill out all fields.");
    }
}

function resetForm() {
    document.getElementById('employeeName').value = '';
    document.getElementById('employeeAge').value = '';
    document.getElementById('employeeDepartment').value = '';
    document.getElementById('employeeSalary').value = '';
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    showAllEmployees();
}

function editEmployee(index) {
    const employee = employees[index];
    document.getElementById('editEmployeeIndex').value = index;
    document.getElementById('editEmployeeName').value = employee.name;
    document.getElementById('editEmployeeAge').value = employee.age;
    document.getElementById('editEmployeeDepartment').value = employee.department;
    document.getElementById('editEmployeeSalary').value = employee.salary;

    document.getElementById('addEmployeeForm').style.display = 'none';
    document.getElementById('editEmployeeForm').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}

function saveEmployee() {
    const index = document.getElementById('editEmployeeIndex').value;
    const name = document.getElementById('editEmployeeName').value;
    const age = document.getElementById('editEmployeeAge').value;
    const department = document.getElementById('editEmployeeDepartment').value;
    const salary = document.getElementById('editEmployeeSalary').value;

    if (name && age && department && salary) {
        const employee = employees[index];
        employee.name = name;
        employee.age = age;
        employee.department = department;
        employee.salary = salary;

        showAllEmployees();
        document.getElementById('editEmployeeForm').style.display = 'none';
        document.getElementById('result').style.display = 'block';
    } else {
        alert("Please fill out all fields.");
    }
}

function showAllEmployees() {
    document.getElementById('addEmployeeForm').style.display = 'none';
    document.getElementById('editEmployeeForm').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    const result = document.getElementById('result');
    result.innerHTML = `<h3>All Employees</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${employees.map((employee, index) => `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                        <td>
                            <button class="edit-button" onclick="editEmployee(${index})">Edit</button>
                            <button class="delete-button" onclick="deleteEmployee(${index})">Delete</button>
                        </td>
                    </tr>
                `).join('')}
            </tbody>
        </table>`;
}

function calculateAverageSalary() {
    const totalSalary = employees.reduce((sum, employee) => sum + parseFloat(employee.salary), 0);
    const averageSalary = totalSalary / employees.length;
    document.getElementById('result').innerHTML = `<h3>Average Salary: ${averageSalary.toFixed(2)}</h3>`;
}

function filterByDepartment() {
    const department = prompt("Enter department to filter:");
    const filteredEmployees = employees.filter(employee => employee.department.toLowerCase() === department.toLowerCase());
    const result = document.getElementById('result');
    result.innerHTML = `<h3>Employees in ${department} Department</h3>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                ${filteredEmployees.map((employee, index) => `
                    <tr>
                        <td>${employee.name}</td>
                        <td>${employee.age}</td>
                        <td>${employee.department}</td>
                        <td>${employee.salary}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>`;
}

function increaseSalary() {
    const percentage = parseFloat(prompt("Enter percentage increase:"));
    employees.forEach(employee => {
        employee.salary = (employee.salary * (1 + percentage / 100)).toFixed(2);
    });
    showAllEmployees();
}

function sortEmployeesByAge() {
    employees.sort((a, b) => a.age - b.age);
    showAllEmployees();
}

function showAddEmployeeForm() {
    document.getElementById('addEmployeeForm').style.display = 'block';
    document.getElementById('editEmployeeForm').style.display = 'none';
    document.getElementById('result').style.display = 'none';
}


