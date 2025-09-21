// employees.js
// Employee data
let employees = [
  { id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", salary: 5000 },
  { id: 2, firstName: "Krish",   lastName: "Lee",   email: "krish@gmail.com",   salary: 4000 },
  { id: 3, firstName: "Racks",   lastName: "Jacson",email: "racks@gmail.com",   salary: 5500 },
  { id: 4, firstName: "Denial",  lastName: "Roast", email: "denial@gmail.com",  salary: 9000 }
];

// Exported functions
exports.getAllEmployees = () => {
  return employees;
};

exports.getEmployeeByFirstName = (firstName) => {
  return employees.find(emp => emp.firstName === firstName);
};

exports.getTotalSalary = () => {
  return employees.reduce((sum, emp) => sum + Number(emp.salary || 0), 0);
};