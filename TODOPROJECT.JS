let todoList =[
    {item:'buymilk',
    dueDate:'8/6/2023'},
    {item:'js learn',
    dueDate:'4/10/2023'}

];//decleare the array to maintain the todo list
displayElement();// i call it here because when page will load all data will be display
function addTodo(){
    let inputElement = document.querySelector('#todo-input');//this is how i fecthing inout element with the helo of id and qurey selector
    let inputDate = document.querySelector('#todo-date');
    let dateValue = inputDate.value;
    let inputValue = inputElement.value;//this is how i can fetch the value from input element like user input
    todoList.push({item:inputValue,dueDate:dateValue});//this  is how i am pushing all value into the array
    inputElement.value = ' ';// here after taking value input element value willbe blank beacuse value assign as empty
    dateValue.val = '';
    displayElement();//call it here again beacuse after new task added all task are will show automatically  including new one
    console.log(inputValue);
};

function displayElement(){
    let displayList = document.querySelector('#displayContainer');//this is how fetching the element like previously
    let newHtml = ' ';//
    
    for(let i = 0;i<todoList.length;i++){
        let toodItem = todoList[i].item;
        let todoDate = todoList[i].dueDate;
        newHtml += `
        <span class = "input-data">${toodItem}</span>
        <span class = "input-data">${todoDate}</span>
        <button class = "delete-button" onclick = "todoList.splice(${i},1);displayElement();">Delete</button>
         `
    
    };

    displayList.innerHTML = newHtml;

    
}