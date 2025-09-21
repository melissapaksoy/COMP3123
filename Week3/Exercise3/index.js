// index.js
const http = require("http");
const Employees = require("./employees"); 

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081;

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.statusCode = 405;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.setHeader("Allow", "GET");
    return res.end(JSON.stringify({ error: http.STATUS_CODES[405] }));
  }

  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.end("<h1>Welcome to Lab Exercise 03</h1>");
  }

  if (req.url === "/employee") {
    const employees = Employees.getAllEmployees();
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.end(JSON.stringify(employees));
  }

  if (req.url === "/employee/names") {
    const names = Employees.getAllEmployees()
      .map(e => `${e.firstName} ${e.lastName}`)
      .sort((a, b) => a.localeCompare(b));
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.end(JSON.stringify(names));
  }

  if (req.url === "/employee/totalsalary") {
    const total = Employees.getTotalSalary();  
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.end(JSON.stringify({ total_salary: total }));
  }

  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  return res.end(JSON.stringify({ error: http.STATUS_CODES[404] }));
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
