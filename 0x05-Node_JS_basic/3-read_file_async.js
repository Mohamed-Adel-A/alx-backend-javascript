const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n').filter((line) => line !== '');
        const studentsByField = {};
        students.forEach((student) => {
          const fields = student.split(',');
          const field = fields[3];
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(fields[0]);
        });
        console.log(`Number of students: ${students.length}`);
        for (const field in studentsByField) {
          if (Object.hasOwnProperty.call(studentsByField, field)) {
            console.log(`Number of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
          }
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
