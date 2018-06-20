var numberOfEstaff = document.getElementById("EstaffAmount").value;
var numberOfManagers = document.getElementById("ManagerAmount").value;
var numberOfEmployees = document.getElementById("EmployeeAmount").value;
var numberOfInterns = document.getElementById("InternAmount").value;
var salaryRunner; // to keep track of our salary event
var previousSalary = 0;

/**
 * Will get a salary per second, given 
 * a yearly salary. Assumes 8 hours a day
 * and 240 work days (260 less holidays
 * and 2 weeks vacation). */
function getSalaryPerSecond(salary) {
    return ((((salary / 240) / 8) / 60) / 60);
}

/**
 * Will calculate a running salary.
 * Assumes the following salaries:
 * E-Staff: 200k/yr
 * Managers: 140k/yr
 * Employees: 70k/yr
 * Interns: 35k/yr */
function calculateSalary() {
    numberOfEstaff = document.getElementById("EstaffAmount").value;
    numberOfManagers = document.getElementById("ManagerAmount").value;
    numberOfEmployees = document.getElementById("EmployeeAmount").value;
    numberOfInterns = document.getElementById("InternAmount").value;
    previousSalary += (numberOfEstaff * getSalaryPerSecond(200000)) + (numberOfManagers * getSalaryPerSecond(140000)) + (numberOfEmployees * getSalaryPerSecond(70000)) + (numberOfInterns * getSalaryPerSecond(35000));
    document.getElementById("CurrentSalary").innerText = "Meeting Cost: $" + previousSalary.toFixed(2);
}

document.getElementById("CalculateSalary").addEventListener("click", function () {
    if (salaryRunner) {
        clearInterval(salaryRunner);
        salaryRunner = null;
        this.innerText = "Calculate Meeting Salary";
    }
    else {
        salaryRunner = setInterval(calculateSalary, 1000);
        this.innerText = "Stop Calculating Salary";
    }
});
