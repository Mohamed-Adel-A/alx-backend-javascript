const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line !== '');
        const students = lines.slice(1);
        const studentsByField = {};
        let result;
        students.forEach((student) => {
          const fields = student.split(',');
          const field = fields[3];
          if (!studentsByField[field]) {
            studentsByField[field] = [];
          }
          studentsByField[field].push(fields[0]);
        });
        result = `Number of students: ${students.length}`;
        for (const field in studentsByField) {
          if (Object.hasOwnProperty.call(studentsByField, field)) {
            result += (`\nNumber of students in ${field}: ${studentsByField[field].length}. List: ${studentsByField[field].join(', ')}`);
          }
        }
        resolve(result);
      }
    });
  });
}

const app = http.createServer(async (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const responseParts = ['This is the list of our students'];

    countStudents(process.argv[2])
      .then((report) => {
        responseParts.push(report);
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
      })
      .catch((err) => {
        responseParts.push(err instanceof Error ? err.message : err.toString());
        const responseText = responseParts.join('\n');
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', responseText.length);
        res.statusCode = 200;
        res.write(Buffer.from(responseText));
      });
  }
});

app.listen(1245, () => {
  console.log('Server running at http://127.0.0.1:1245/');
});

module.exports = app;
