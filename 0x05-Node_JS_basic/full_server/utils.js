const fs = require('fs');

const readDatabase = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const students = data.split('\n').filter(line => line !== '');
        const studentsByField = {};
        students.forEach((student) => {
          const fields = student.split(',');
          const field = fields[3];
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(fields[0]);
        });
        const sortedStudentsByField = {};
        Object.keys(studentsByField).sort().forEach(key => {
          sortedStudentsByField[key] = studentsByField[key];
        });
        resolve(sortedStudentsByField);
      }
    });
  });
};

module.exports = readDatabase;
