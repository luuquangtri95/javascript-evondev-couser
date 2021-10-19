//sort trong thực tế

const studentList = [
  { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
  { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
  { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
  { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
];

function sortById(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.sort((s1, s2) => {
    /**
     * return > 0,  s1 after(sau) s2
     * return < 0,  s1 before(trước) s2
     * return = 0, s1 equal s2
     */

    return s1.id - s2.id;
  });
}

console.log(sortById(studentList));
