const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.write('Hello Holberton School!\n');
    res.end();
  } else if (req.url === '/students') {
    fs.readFile('database.csv', 'utf8', (err, data) => {
      if (err) {
        res.write('Cannot load the database');
        res.end();
        return;
      }

      const lines = data.trim().split('\n').slice(1); // Skip first row
      const students = {};
      lines.forEach(line => {
        const [firstname, lastname, age, field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstname);
      });

      res.write('This is the list of our students\n');
      for (const field in students) {
        if (Object.hasOwnProperty.call(students, field)) {
          res.write(`Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`);
        }
      }
      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245);
