/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



//showPage function will create and append elements to display in HTML. 
function showPage (data, page) {
  let startIndex = (page * 9) - 9;
  let endIndex = page * 9;
  let studentList = document.querySelector('ul.student-list');
  studentList.innerHTML = '';
  for (i = 0; i < data.length; i++) {
      if (i >= startIndex && i < endIndex) {
        
        function createEl(elementName) {
           
           let element = document.createElement(elementName);
           return element;
        }

        let li = createEl('li');
        let div = createEl('div');
        let img = createEl('img');
        let h3 = createEl('h3');
        let span = createEl('span');
        let div2 = createEl('div2');
        let span2 = createEl('span2');
 
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


//addPagination function will create page numbers up to max of given data taking into
//account of 9 profiles per page. It will also include click event listener that
//to go between pages.
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
         let buttonClick = e.target;
         
         if (buttonClick === pageList) {
            buttonClick = null;
            
         } else {
               
            button.className = null;
            buttonClick.className = 'active';
            showPage(data, buttonClick.textContent);
         }
            
            
      });     
   }       
   
}

//Create Search Bar 
function searchBar (data) {

   function createEl(elementName) {
           
      let element = document.createElement(elementName);
      return element;
   }

   let label = createEl('label');
   let searchSpan = createEl('span');
   let input = createEl('input');
   let button = createEl('button');
   let searchHeader = document.querySelector('h2');
   let buttonImg = createEl('img');  
   searchHeader.insertAdjacentElement('afterend', label);
   label.appendChild(searchSpan);
   label.appendChild(input);
   label.appendChild(button);
   label.className = "student-search";
   searchSpan = 'Search by name...' ;
   input.id = "search";
   input.placeholder = "Search by name...";
   button.type = "button";
   button.insertAdjacentElement('afterbegin',buttonImg);
   buttonImg.src="img/icn-search.svg";
   buttonImg.alt="Search icon";
   

   //Submit button 
   button.addEventListener('click', (e) => {
      e.preventDefault();
      showPage(searchFunction(data),1);
      addPagination(searchFunction(data));


   });

   

}


//searchFunction reads what is entered in the search field and pushes the profile to a new list and displays it.
function searchFunction () {
   let newList = []; 
   let userInput = document.getElementById('search');
   for (let i = 0; i < data.length; i++) {

      

      if (userInput.value.length !== 0 && userInput.value.toLowerCase() == (data[i].name.first.toLowerCase() || data[i].name.last.toLowerCase())) {          
         newList.push(data[i]);
      }

      
   }
   return newList;  
}




// Call functions
showPage(data, 1);
addPagination(data);
searchBar(data);
searchFunction();
