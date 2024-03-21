const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsByField = await readDatabase(process.argv[2]);
      let response = 'This is the list of our students\n';
      Object.entries(studentsByField).forEach(([field, students]) => {
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
