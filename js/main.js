let addToDoButton = document.getElementById('addToDo');
let toDoContainer = document.getElementById('toDoContainer');
let inputField = document.getElementById('inputField');

addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    paragraph.innerHTML = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
    
});


function PrintList(toDoContainer)
{
    var mywindow = window.open('', 'PRINT', 'height=400,width=600');
    new Date();
    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');
    mywindow.document.write('<center>');
    mywindow.document.write(document.getElementById('header').innerHTML);
    
    mywindow.document.write('<h1>' + document.title  + '</h1>');
    mywindow.document.write(document.getElementById('toDoContainer').innerHTML);
    mywindow.document.write('<p>' + new Date()  + '</p>');
    mywindow.document.write('</center>');
    mywindow.document.write('</body></html>');

    mywindow.document.close(); // necessary for IE >= 10
    mywindow.focus(); // necessary for IE >= 10*/

    mywindow.print();
    mywindow.close();

    return true;
};


