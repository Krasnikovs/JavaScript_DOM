const list = document.querySelector('#book-list ul')

//delete
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

//add book
const addForm = document.forms['add-book'];

console.log(forms);
console.log(forms['add-book']);

Array.from(forms).forEach(function(form){
    console.log(form);
  });

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    console.log(value);
});