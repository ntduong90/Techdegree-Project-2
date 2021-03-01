/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/


function showPage (list, page) {
  let startIndex = (page * 9) - 9;
  let endIndex = page * 9;
  let studentList = document.querySelector('ul.student-list');
  studentList.innerHTML = '';
  for (i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
        let studentProfile = '';
        let li = document.createElement('li');
        let div = document.createElement('div');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let span = document.createElement('span');
        studentList.appendChild(li);
        li.appendChild(div);
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(span);

                         

        
   
                              

      }
   }
  

}
showPage(data,1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
