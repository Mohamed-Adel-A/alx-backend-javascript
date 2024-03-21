function updateStudentGradeByCity(students, city, newGrades) {
  return students.map(student => {
    const foundGrade = newGrades.find(grade => grade.studentId === student.id);
    if (foundGrade) {
      return { ...student, grade: foundGrade.grade };
    } else if (student.location === city) {
      return { ...student, grade: 'N/A' };
    } else {
      return student;
    }
  });
}

export default updateStudentGradeByCity;
