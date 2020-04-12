function Display(){
    this.sForm=function(){
        let form=document.getElementById("create");
        let state= form.className;
        if (state=='show'){
            form.className='hide';
        }else{
            form.className='show';
        }

    };
    this.sNote=function(note){
        let innerHtml= `<h3>${note.title}</h3>`+
            `<hr>${note.content} <span id='time'> ${note.time}</span>`;
        let a=document.createElement('div');
        a.innerHTML=innerHtml;
        a.id='view';
        document.body.appendChild(a);
        

    };
    this.hideN=function(){
        let eml=document.getElementById('view');
        if (!eml){
            return;
        }
        eml.parentNode.removeChild(eml);
    };
    this.delete=function(id){
        let noteDel=document.getElementById(id);
        noteDel.parentNode.removeChild(noteDel);
    };
    this.displayNote=function(note){
        let html=`<li id='${note.id}' class="hide" >`+
        `${note.title}`+
        `<div>
            <i job="delete" class="fas fa-trash-alt"></i>
            <i job="edit" class="fas fa-pen"></i>
        </div></li>`;
        let notes=document.getElementById("notes");
        notes.insertAdjacentHTML('beforeend',html);
    };
    this.sEdit=function(note){
        let form=document.getElementById("edit-form");
        let state= form.className;
        let title=document.getElementById("edit-title");
        let content=document.getElementById("edit-content");
        let id=document.getElementById('edit-id');
        if (state=='show'){
            form.className='hide';
        }else{
            id.value=note.id;
            title.value=note.title;
            content.value=note.content;
            form.className='show';
        }

    };
}

