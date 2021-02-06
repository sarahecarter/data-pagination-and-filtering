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
   let pages = Math.ciel(list.length / 9);
   //select ul link-list
   //set html content of link-list to empty string
   //loop over page number variable
      //create buttons for each item
      //insert buttons into link-list
   //select first page button and give it class active
   //add event listener for clicks on link-list
      //check if button is clicked
         //remove active class from other buttons
         //add active class to button clicked
         //call showPage function using list and page number
}


// Call functions
showPage(data, 1);