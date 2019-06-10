// #1)  Loop through this array of objects and console.log "_name_'s job title is _title_."

const employees = [
    {
      name: "Bob",
      department: "sales",
      title: "sales manager"
    },
    {
      name: "Tina",
      department: "finance",
      title: "director of finance"
    },
    {
      name: "Randy",
      department: "IT",
      title: "hardware guy"
    },
    {
      name: "Glenda",
      department: "C-suite",
      title: "CEO"
    }
  ]

  function employeeDetails() {
      for (let i = 0; i < employees.length; i++) {
          console.log(`${employees[i].name}'s job title is ${employees[i].title}.`);
      }
  }

  employeeDetails();

//   #2) Functions can return a value that we can capture:

// 1. Write a function that takes a string of a dog breed as an argument (like 'border collie')

function favDogBreed(breed) {
    if (breed){
        return `My favorite dog breed is ${breed}.`;
}
    else {
        return `I like cats.`;
    }
}

let krystalFavDog = favDogBreed("german sheperd mix");
let noFavDog = favDogBreed();

console.log(`When it comes to pets, ${krystalFavDog}`,);

console.log(`When it comes to pets, ${noFavDog}`);

// 2. Have the function return "my favorite dog breed is" plus the passed in string. 
// If no argument is passed to the function, return "I like cats".

// 3. Execute the function in a way that captures the returned value in a variable.

// 4. Console.log the string "When it comes to pets," plus the returned value of the function.
