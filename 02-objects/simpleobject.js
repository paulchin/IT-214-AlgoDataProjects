var student = {
  firstname: 'Mike', // key : value
  lastname: 'Lee',
  age: 18,
  ic: 123456
};

console.log('firstname: ', student.firstname);
console.log('lastname: ', student.lastname);
console.log('age: ', student.age);
console.log('ic: ', student.ic);

var jsonString = JSON.stringify(student);
console.log(jsonString);
