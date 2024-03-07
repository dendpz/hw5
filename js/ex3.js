//Declare studentList Array
const studentList = [
  {
      firstName: "Allan",
      lastName: "Able",
      scores: [95, 85, 92, 98]
  },
  {
      firstName: "Amy",
      lastName: "Alexander",
      scores: [80, 88, 100]
  },
  {
      firstName: "Betty",
      lastName: "Barns",
      scores: [70, 80, 90, 100]
  },
  {
      firstName: "Bob",
      lastName: "Bones",
      scores: [75, 85, 95, 85]
  },
  {
      firstName: "Cindy",
      lastName: "Chase",
      scores: [95, 90, 92, 98]
  },
  {
      firstName: "Charles",
      lastName: "Chips",
      scores: [88, 99, 90]
  },
];
// TO DO - Write higher order functions / There are many solutions

//Declare cLastNameResults.  Use functional programming (filter, map, reduce, and pure functions) to generate a new array of objects (don’t use a traditional loop)
const cLastNameResults = studentList.filter(student => student.lastName.toLowerCase().startsWith("c")).map(studentList => {
  const avg = studentList.scores.reduce((total, score) => total + score, 0) / studentList.scores.length;
  const min = studentList.scores.reduce((min, score) => Math.min(min, score));
  const max = studentList.scores.reduce((max, score) => Math.max(max, score));
  return {
    firstName: studentList.firstName,
    lastName: studentList.lastName,
    minScore: min,
    maxScore: max,
    avgScore: avg
  }
})

//Output
console.log(cLastNameResults);