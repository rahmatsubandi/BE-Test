function solve(student, candies, firstStudent) {
  let candyDistribution = [];
  let candy = 0;
  let currentStudent = firstStudent;
  while (candies > 0) {
    candyDistribution.push(currentStudent);
    candy++;
    if (candy === student) {
      candy = 0;
      currentStudent = firstStudent;
    } else {
      currentStudent++;
    }
    candies--;
  }
  return candyDistribution[candyDistribution.length - 1];
}

console.log(solve(5, 3, 1));
