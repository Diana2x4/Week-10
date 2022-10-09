
let id = 0;
// each card is going to have its own ID
//when we click our add button this is going to happen
document.getElementById('add').addEventListener('click',()=>{
    //refrence to our table id = list
    let table = document.getElementById('list');
    //creating rows at postition 1
    let row= table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    // user input for our cells
    row.insertCell(0).innerHTML = document.getElementById('new-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-pulled-date').value;
    row.insertCell(2).innerHTML = document.getElementById('new-Type').value;
    row.insertCell(3).innerHTML = document.getElementById('new-Set').value;
    row.insertCell(4).innerHTML = document.getElementById('new-Number').value;
    let actions = row.insertCell(5);
    //our delete button
    actions.appendChild(createDeleteButton(id++));
    //leaves our form clean for user experience
    document.getElementById('new-name').value = '';
    document.getElementById('new-Type').value = '';
    document.getElementById('new-Set').value = '';
    document.getElementById('new-Number').value = '';
    
});
//creates buttton and binds method to that button when it is clicked
function createDeleteButton(id){
    let btn = document.createElement('button');
    btn.className = 'btn btn-dark'; 
    btn.id = id;
    btn.innerHTML = 'Delete';
    //button event listener 
    btn.onclick = () => {
let elementToDelete = document.getElementById(`item-${id}`)
elementToDelete.parentNode.removeChild(elementToDelete);
    };
    return btn;
}
