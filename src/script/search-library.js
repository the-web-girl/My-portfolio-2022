//Delete books
const list=document.querySelector('.books-list ul');
list.addEventListener('click',function(e){
    if(e.target.className== "delete"){
        const li=e.target.parentElement;
        list.removeChild(li);
    }
});

// Add books
const addBook=document.forms['add-book-form'];
addBook.addEventListener('submit',function(e){
    e.preventDefault(); //forms refresh the page.we prevent it.
    const value=addBook.querySelector('input[type="text"]').value; //grab the value of input text-area
   
    //create element
    const li=document.createElement('li');
    const bookName=document.createElement('div');
    const deleteBtn=document.createElement('button');

    //add content
    deleteBtn.textContent="Delete";
    bookName.textContent=value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');
    
    //append to the ul
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

});

//Hide checkbox
const hideBox=document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
   if(hideBox.checked){
       list.style.display='none';
   }
   else{
    list.style.display='initial';
   }
});

//Search books
var searchBox=document.forms["search-book"].querySelector('input'); 

//there is input field in the searchbox
searchBox.addEventListener('keyup',function(e){
     const searchText=e.target.value.toLowerCase();
     const listedBooks=list.getElementsByTagName('li');
     Array.from(listedBooks).forEach(function(book){
          const title=book.firstElementChild.textContent;
          if(title.toLowerCase().indexOf(searchText) !=-1){ //match with search text
               book.style.display='block';
          }
          else{
              book.style.display='none';
          }
     });
});
