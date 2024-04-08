// task_3/js/main.ts
class StudentClass {
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClass;
}

function StudentFunction(firstName: string, lastName: string): StudentClass {
  this.firstName = firstName;
  this.lastName = lastName;
}

StudentFunction.prototype.workOnHomework = function (): string {
  return 'Currently working';
};

StudentFunction.prototype.displayName = function (): string {
  return this.firstName + ' ' + this.lastName;
};

export { StudentClass, StudentFunction, StudentConstructor };
