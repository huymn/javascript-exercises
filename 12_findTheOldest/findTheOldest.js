const findTheOldest = function (people) {
  return people.reduce(
    (oldestPerson, currentPerson) => {
      if (
        currentPerson.yearOfBirth !== undefined &&
        currentPerson.yearOfDeath !== undefined
      ) {
        if (
          currentPerson.yearOfDeath - currentPerson.yearOfBirth >
          oldestPerson.yearOfDeath - oldestPerson.yearOfBirth
        ) {
          oldestPerson = currentPerson;
        }
      } else if (
        currentPerson.yearOfDeath === undefined &&
        currentPerson.yearOfBirth !== undefined
      ) {
        const currentYear = new Date().getFullYear();
        if (
          currentYear - currentPerson.yearOfBirth >
          oldestPerson.yearOfDeath - oldestPerson.yearOfBirth
        ) {
          oldestPerson = { ...currentPerson, yearOfDeath: currentYear };
        }
      }

      return oldestPerson;
    },
    { yearOfBirth: 0, yearOfDeath: 0 }
  );
};

// Do not edit below this line
module.exports = findTheOldest;
