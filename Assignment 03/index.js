const people = [
    {
      name: 'Ben',
      age: 30,
      occupation: 'Banker',
      salary: 3000,
      pets: []
    },
    {
      name: 'Jane',
      age: 26,
      occupation: 'Teacher',
      salary: 1200,
      pets: ['dog']
    },
    {
      name: 'John',
      age: 31,
      occupation: 'Developer',
      salary: 4000,
      pets: ['dog', 'cat']
    },
    {
      name: 'Mike',
      age: 26,
      occupation: 'Developer',
      salary: 5000,
      pets: []
    },
    {
      name: 'Tom',
      age: 34,
      occupation: 'Teacher',
      salary: 3400,
      pets: ['dog', 'parrot']
    }
  ];
  
  // 1. Calculate sum of all teacher salaries
  
    const sum = people 
        .filter((x) => x.occupation === "Teacher")
        .reduce((acc, curr) => (acc += curr.salary), 0);
    console.log(sum);

  // 2. Create a new array with the same people but double salaries of developers
     
  const devSalary = people .map((x) =>
        x.occupation === "Developer" ? {...x, salary: x.salary * 2} : x
  );
  console.log(devSalary);

  // 3. Filter people who has a dog

  const dogPerson = people.filter((p) => p.pets.includes("dog"));
  console.log (dogPerson);

  // 4. Figure out if all the people have pets or not

  const petPerson = people.every (x => x.pets.length);
  console.log(petPerson);


  // 5. Figure out if any of the people are above age 30
  
    const peopleAge = people.some (p => p.age > 30 );
    console.log(peopleAge);


    
// ---

// flatten arrays into a single array

function flatten(arr) {
    return  [].concat(...arr);    
 }
 
 const arrays = [
     ['first', 'second'],
     [1, 2, 3],
     [true]
 ];
 
 console.log(flatten(arrays)); // ['first', 'second', 1, 2, 3, true],

//---

 const voters = [
    { name: 'Ben', age: 30, voted: false },
    { name: 'Jane', age: 32, voted: true },
    { name: 'John', age: 25, voted: true },
    { name: 'Mike', age: 20, voted: false },
    { name: 'Tom', age: 21, voted: true },
    { name: 'Ben', age: 55, voted: false },
    { name: 'Jane', age: 35, voted: true },
    { name: 'John', age: 58, voted: false },
    { name: 'Mike', age: 43, voted: false },
    { name: 'Tom', age: 45, voted: true }
  ];
  
  // How many people voted?
  // console.log(count) // 5
   console.log(voters.filter((x) => x.voted).length);




   //---
   // implement map

   const arr = [1, 2, 3, 4, 5];
const mappedArr = myMap(arr, (x) => x / 2);

function myMap(arr, fn) {
  let mappedArr = [];

  for (let item of arr) {
    mappedArr.push(fn(item));
  }

  return mappedArr;
}

// implement filter
const arr2 = [1, 2, 3, 4, 5];
const filteredArr = arr2.filter(num => num % 2 === 0);

console.log(filteredArr);

// implement every

const voters2 = [
    { name: 'Ben', age: 30, voted: false },
    { name: 'Jane', age: 32, voted: true },
    { name: 'John', age: 25, voted: true },
    { name: 'Mike', age: 20, voted: false },
    { name: 'Tom', age: 21, voted: true },
    { name: 'Ben', age: 55, voted: false },
    { name: 'Jane', age: 35, voted: true },
    { name: 'John', age: 58, voted: false },
    { name: 'Mike', age: 43, voted: false },
    { name: 'Tom', age: 45, voted: true }
  ];

  const didTheyVote = voters2.every(value => value.voted);
  console.log(didTheyVote);


  // implement reduce 
 const array1 =[1, 7, 0, 2, -2];
 const sum2 = (previousValue, currentValue) => previousValue + currentValue;
 
 console.log(array1.reduce(sum2));

    


