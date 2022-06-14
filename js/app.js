console.log("testing");

// function to show notes 
function showNotes() {

    let notes = localStorage.getItem('notes');
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (elememt, index) {
        html += `<div class="noteCard  card my-2 mx-2" style="width: 18rem;">
        <div class="card-body">
            <h5 style="text-align:center;" class="card-title">Notes ${index + 1}</h5>
            <p id="para"> ${elememt}</p>
            <button id="${index}" onclick="deleteNotes(this.id)"  class="btn btn-primary">Delete Note
        </div>
    </div>`});

    let notesElem = document.getElementById('notes');

    if (notesObj.length != 0) {
        notesElem.innerHTML = html;

    }
    else {
        notesElem.innerHTML = `<h2>Nothing to show! Use "Add a note" section above to add notes</h2>`;
    }


};



showNotes();

//add eventlistener to add button
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addFunc);

function addFunc(e) {
    showNotes();
    let addTxt = document.getElementById('textId');
    let notes = localStorage.getItem('notes');

    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    addTxt = "";

    showNotes();

}

//calling deteteNotes function to delete button

function deleteNotes(index) {

    console.log("i am deleting", +index + 1);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();

};


// add event listner to search funtionality

let search = document.getElementById(`searchTxt`);

search.addEventListener(`click`, function () {
    let inputVal = search.value.toLowerCase();

    let noteCards = document.getElementsByClassName('noteCard');

    Array.from(noteCards).forEach(function (elememt) {
        let cardTxt = elememt.getElementsByTagName('p')[0].innerText;
        // console.log(cardTxt);

        if (cardTxt.includes(inputVal)) {
            elememt.style.display = `block`;
        }
        else {
            elememt.style.display = 'none';
        }
    });
});

