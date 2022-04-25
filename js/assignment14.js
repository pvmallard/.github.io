// Problem 2
let company = {
  "companyName": "Tech Stars",
  "website": "www.techstars.site",
  "employees": [ // Problem 1
    {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseEligible": true,
    },
    {
      "firstName": "Mary",
      "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raiseEligible": true,
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raiseEligible": false,
    }
  ]
}

// Function to populate header... try to add the location of the secret base!

function populateHeader(obj) {
  const header = document.querySelector('header');
  const myH1 = document.createElement('h1');

  myH1.textContent = obj['company'];
  console.log(myH1);
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  // We use the `` (top left of keyboard) to indicate strings.
  // You could also concatenate using + signs
  // Like 'Hometown: ' + obj['homeTown'] + '// Formed: ' + obj['formed']
  myPara.textContent = `Company: ${obj['companyName']} // Website: ${obj['website']}`;

  header.appendChild(myPara);
}

function populateHeader3(obj) {
  const header = document.querySelector('header3');
  const myH1 = document.createElement('h1');

  myH1.textContent = obj['company'];
  console.log(myH1);
  header.appendChild(myH1);

  const myPara = document.createElement('p');
  // We use the `` (top left of keyboard) to indicate strings.
  // You could also concatenate using + signs
  // Like 'Hometown: ' + obj['homeTown'] + '// Formed: ' + obj['formed']
  myPara.textContent = `Company: ${obj['companyName']} // Website: ${obj['website']}`;

  header.appendChild(myPara);
}

// Function to populate heroes cards; will run for however many heros are in the "members" array of our JSON.

function populateEmployees(obj) {
  const section = document.querySelector('section');
  const employees = obj['employees'];
  //let myArticle = document.createElement('article');

  for (const employee of employees) {
    const myArticle = document.createElement('article');
    const myH2 = document.createElement('h2');
    const myPara1 = document.createElement('p');
    const myPara2 = document.createElement('p');
    const myPara3 = document.createElement('p');
    const myPara4 = document.createElement('p');
    const myPara5 = document.createElement('p');
    //const myList = document.createElement('ul');

    myH2.textContent = employee.name;
    myPara1.textContent = `First Name: ${employee.firstName}`;
    myPara2.textContent = `Department: ${employee.department}`;
    myPara3.textContent = `Designation: ${employee.designation}`;
    myPara4.textContent = `Salary: ${employee.salary}`;
    myPara5.textContent = `Raise Eligible: ${employee.raiseEligible}`;

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    //myArticle.appendChild(myList);

    section.appendChild(myArticle);
    }
  }

  function populateEmployees2(obj) {
    const section = document.querySelector('section2');
    const employees = obj['employees'];
    //let myArticle = document.createElement('article');

    for (const employee of employees) {
      const myArticle = document.createElement('article');
      const myH2 = document.createElement('h2');
      const myPara1 = document.createElement('p');
      const myPara2 = document.createElement('p');
      const myPara3 = document.createElement('p');
      const myPara4 = document.createElement('p');
      const myPara5 = document.createElement('p');
      //const myList = document.createElement('ul');

      myH2.textContent = employee.name;
      myPara1.textContent = `First Name: ${employee.firstName}`;
      myPara2.textContent = `Department: ${employee.department}`;
      myPara3.textContent = `Designation: ${employee.designation}`;
      myPara4.textContent = `Salary: ${employee.salary}`;
      myPara5.textContent = `Raise Eligible: ${employee.raiseEligible}`;

      myArticle.appendChild(myH2);
      myArticle.appendChild(myPara1);
      myArticle.appendChild(myPara2);
      myArticle.appendChild(myPara3);
      myArticle.appendChild(myPara4);
      myArticle.appendChild(myPara5);
      //myArticle.appendChild(myList);

      section.appendChild(myArticle);
      }
    }

    function populateEmployees3(obj) {
      const section = document.querySelector('section3');
      const employees = obj['employees'];
      //let myArticle = document.createElement('article');

      for (const employee of employees) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara5 = document.createElement('p');
        //const myList = document.createElement('ul');

        myH2.textContent = employee.name;
        myPara1.textContent = `First Name: ${employee.firstName}`;
        myPara2.textContent = `Department: ${employee.department}`;
        myPara3.textContent = `Designation: ${employee.designation}`;
        myPara4.textContent = `Salary: ${employee.salary}`;
        myPara5.textContent = `Raise Eligible: ${employee.raiseEligible}`;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara5);
        //myArticle.appendChild(myList);

        section.appendChild(myArticle);
        }
      }

populateEmployees(company);

populateHeader(company);
populateEmployees2(company);

// Problem 3
function addEmployee(obj, name, dept, designa, sal, raise) {
  let employee = {
    "firstName": name,
    "department": dept,
    "designation": designa,
    "salary": sal,
    "raiseEligible": raise
  };

  obj['employees'].push(employee); // the push() method adds a value to an object/array.
}
addEmployee(company, "Anna", "Tech", "Executive", 25600, false);

populateHeader3(company);
populateEmployees3(company);
