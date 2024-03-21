const fs = require('fs');

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, 'utf8').split('\n').filter((line) => line !== '');
    const students = {};
    data.forEach((line) => {
      const student = line.split(',');
      const field = student[3];
      if (!students[field]) {
        students[field] = [];
      }
      students[field].push(student[0]);
    });
    console.log(`Number of students: ${data.length - 1}`);
    for (const field in students) {
      if (Object.hasOwnProperty.call(students, field)) {
        console.log(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
