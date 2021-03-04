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


function showPage (data, page) {
  let startIndex = (page * 9) - 9;
  let endIndex = page * 9;
  let studentList = document.querySelector('ul.student-list');
  studentList.innerHTML = '';
  for (i = 0; i < data.length; i++) {
      if (i >= startIndex && i < endIndex) {
        
        

        let li = document.createElement('li');
        let div = document.createElement('div');
        let img = document.createElement('img');
        let h3 = document.createElement('h3');
        let span = document.createElement('span');
        let div2 = document.createElement('div');
        let span2 = document.createElement('span');
        
        studentList.appendChild(li);
        li.appendChild(div);
        div.appendChild(img);
        div.appendChild(h3);
        div.appendChild(span);
        li.appendChild(div2);
        div2.appendChild(span2);
       
        li.className = 'student-item cf';
        div.className = 'student-details';   
        
        
        
        img.className = 'avatar';
        img.src = `${data[i].picture.large}`;
        img.alt = 'Profile Picture';
        h3.textContent = `${data[i].name.first}` + ` ${data[i].name.last}`;
        span.className = 'email';
        span.textContent = `${data[i].email}`

        div2.className = 'joined-details';
        span2.className = 'date';
        span2.textContent = `${data[i].registered.date}`;
                       

      }
   }
  
   
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (data) {
   let pageMaxNum = Math.round(data.length/9); 
   let pageList = document.querySelector('ul.link-list');
   pageList.innerHTML = '';

   for (let i = 0; i < pageMaxNum; i++) {
      
      let button = document.createElement('button');
      let li = document.createElement('li');
      pageList.appendChild(li);
      li.appendChild(button);
      button.type="button";
      button.textContent = i + 1;
      

      let firstButton = document.querySelector('button');
      firstButton.className = 'active';
      


      pageList.addEventListener('click' , (e) => {
         const buttonClick = e.target;
         if (buttonClick) {
            button.className = null;
            buttonClick.className = 'active';
            showPage(data, buttonClick.textContent);
            
         }     
         
         
         
      })

   }
   
}
showPage(data, 1);
addPagination(data);



// Call functions
