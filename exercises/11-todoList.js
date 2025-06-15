//CODE OF TO DO LIST 1
array1 = [];
function todoList1() {
const todolist1Input = document.querySelector('.todolist1Input');
const gettodolist1Input = todolist1Input.value;

if (!gettodolist1Input) {
    alert('Input some text!') //if the value is empty, this will pop up.
} else {
    array1.push(gettodolist1Input)
    console.log(array1);
}
todolist1Input.value = ''; //reset the input box
}

//CODE OF TO DO LIST 2