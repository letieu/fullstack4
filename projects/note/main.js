let newButton = document.getElementById("new");
let createButton = document.getElementById('create-button');
let ulNote = document.getElementById("notes");
let edit=document.getElementById('edit-button');
let id;
const display = new Display();
let listNote = new ListNote();
// load data ra man hinh
listNote.loadData();
if (listNote.size != 0) {
    for (let key in listNote.notes) {
        display.displayNote(listNote.notes[key]);
    }
}

// khoi tao id 
if (localStorage.id==null){
    id=1;
    localStorage.setItem('id',0);
}else{
    id = localStorage.id;
}
// add listener  create new Note

newButton.addEventListener('click', (event) => {
    display.sForm();
});
createButton.addEventListener('click', (event) => {
    let title = document.getElementById("create-title").value;
    let content = document.getElementById("create-content").value;
    id++;
    let note = new Note(id, title, content);
    listNote.addNote(note);
    display.sForm;
    display.displayNote(note);
    listNote.saveData();
    localStorage.id=id;
    display.sForm();
})

// addListner   view Note
ulNote.addEventListener("click", (event) => {
    console.log(event.target);
    target = event.target;
    switch (target.tagName) {
        case 'LI':
            let liNote = target;
            let id = liNote.id;
            console.log(listNote.notes[id]);
            display.sNote(listNote.notes[id]);
        case 'I':
            console.log(target);
            let o = target.parentNode.parentNode.id;
            let job = target.getAttribute('job');
            if (job == 'delete') {
                display.delete(o);
                listNote.deleteNote(o);
                listNote.saveData();               
                localStorage.id=o;
            }else {
                if( job=='edit'){
                    display.sEdit(listNote.notes[o]);
                }
            }

    }
})

///--------------------- con chuc nang edit lam not
edit.addEventListener("click",(event)=>{
    let id=document.getElementById('edit-id').value;
    let note=listNote.notes[id];
    console.log('sjsksjkjs',id);
    display.sEdit(note);
    listNote.notes[id].title=document.getElementById("edit-title").value;
    listNote.notes[id].content=document.getElementById("edit-content").value;
    listNote.saveData();
    location.reload();
})
// del all
 let del=document.getElementById("del-all");
 del.addEventListener('click',(event)=>{
     localStorage.clear();
     location.reload();
 })
