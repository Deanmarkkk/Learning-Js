//CODE OF TO DO LIST 1
array1 = ['make sandwich'];
function todoList1() {
const todolist1Input = document.querySelector('.todolist1Input');
const gettodolist1Input = todolist1Input.value;

if (gettodolist1Input) {
    array1.push(gettodolist1Input)
}
console.log(array1);
}