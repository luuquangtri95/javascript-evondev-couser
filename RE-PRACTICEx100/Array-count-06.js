const studentList = [
  { id: 1, name: 'Alice', marks: { math: 8 } },
  { id: 2, name: 'Bob', marks: { math: 9 } },
];

function countStudents(studentList, avgMark) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;
  if (avgMark < 0) return 0;

  return studentList.filter((student) => calcAvgObj(student) >= avgMark).length;
}

function calcAvgObj(obj) {
  const { ...marksList } = obj.marks;

  const lengthMarksList = Object.keys(marksList).length;

  return Object.values(marksList).reduce((a, b) => (a + b) / lengthMarksList);
}

console.log(countStudents(studentList, 7));
// =>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> fix code theo for
const studentList = [
  { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
  { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
];
function countStudentsV2(studentList, avgMark) {
  if (!Array.isArray(studentList) || studentList.length === 0) return 0;
  if (avgMark < 0) return 0;

  let newArrMarks = [];

  for (let i = 0; i < studentList.length; i++) {
    let student = studentList[i];

    if (calcAvgObj(student) >= avgMark) {
      newArrMarks.push(studentList[i]);
    }
  }

  return newArrMarks.length;
}

function calcAvgObj(studentObj) {
  let { ...marksList } = studentObj.marks;
  console.log(math);
  let lengthMarksList = Object.keys(marksList).length;

  return Object.values(marksList).reduce((a, b) => (a + b) / lengthMarksList);
}

console.log(countStudentsV2(studentList, 7));
