const company = {
   name: "RikkeiSoft",
   address: "Hà Nội",
   employees: [
      {name: "Nguyễn Văn Luận", position: "Developer"},
      {name: "Nguyễn Văn Hoàng", position: "Tester"},
      {name: "Hoàng Nam Cao", position: "Manager"},
   ]
};
console.log(company.name+" " + company.employees[0].name + " " + company.employees[0].position);
console.log(company.name+" " + company.employees[1].name + " " + company.employees[1].position);
console.log(company.name+" " + company.employees[2].name + " " + company.employees[2].position);