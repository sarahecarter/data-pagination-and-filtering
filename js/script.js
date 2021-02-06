/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   //index of items to be displayed on the page
   let startIndex = ((page * 9) - 9);
   let endIndex = (page * 9);

   let studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   //loop over items and check if they are within page index
   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         //create list element to display student
         let html = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">${list[i].registered.date}</span>
               </div>
            </li>
         `;
         //add list items into student list ul
         studentList.insertAdjacentHTML("beforeend", html);
      } 
   }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   //create variable to store number of page buttons needed
   let pages = Math.ceil(list.length / 9);
   
   let linkList = document.querySelector('.link-list');
   linkList.innerHTML = '';
   //loop over page number variable and create button for each item
   for (let i = 1; i <= pages; i++) {
      let pageNumber = [i];
      let button = `
         <li>
            <button type="button">${pageNumber}</button>
         </li>
      `;
      //insert buttons into link-list
      linkList.insertAdjacentHTML("beforeend", button);
   }
   //select first page button and give it class active
   let firstPage = document.querySelector('li button');
   firstPage.className = 'active';
   //add event listener for clicks on link-list
   linkList.addEventListener('click', e => {
      //check if button is clicked
      if (e.target.tagName === 'BUTTON') {
         //remove active class from other buttons
         let active = document.querySelector('.active');
         active.className = '';
         //add active class to button clicked
         e.target.className = 'active';
         //call showPage function using list and page number
         let pageClicked = e.target.innerHTML;
         showPage(list, pageClicked);
      }    
   })
}

// Call functions
showPage(data, 1);
addPagination(data);

/*
Create a search bar 
Create search function
Add event listener to search button and input field
*/

let header = document.querySelector('.header');
let searchBar = `
<label for="search" class="student-search">
   <input id="search" placeholder="Search by name...">
   <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
</label>
`;
header.insertAdjacentHTML("beforeend", searchBar);
let searchButton = document.querySelector('button');
let input = document.querySelector('input');


function searchStudents() {
   let searchInput = input.value.toLowerCase();
   //initialize empty array to store any search matches
   let matches = [];
   //loop through objects in data 
   for (let i = 0; i < data.length; i++) {
      //create full name variable and make lowercase
      let fullName = `${data[i].name.first} ${data[i].name.last}`;
      fullName = fullName.toLowerCase();
      //check if name includes search input and add current object to match array
      if (fullName.includes(searchInput)) {
         matches.push(data[i]);
      }
   }
   //call showPage function and have it display matches
   showPage(matches, 1);
   //use addPagination function to add buttons
   addPagination(matches);
}

//search event listeners 
input.addEventListener('keyup', searchStudents);
searchButton.addEventListener('click', searchStudents);


