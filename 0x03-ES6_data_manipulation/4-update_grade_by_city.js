function updateStudentGradeByCity(students, city, newGrades) {
  if (students instanceof Array) {
    return students
      .filter((student) => student.location === city)
      .map((student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (newGrades
          .filter((grade) => grade.studentId === student.id)
          .pop() || 'N/A').grade,
      }));
  }
  return [];
}

export default updateStudentGradeByCity;
