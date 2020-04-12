let input=document.getElementById('action');
let ullist=document.getElementById('list');

let list,id;
const LINE='"line"';
let data=localStorage.getItem('todo');
if (data){
    list=JSON.parse(data);
    id=list.lenght;
    loadList(list);
}else{
    list=[];
    id=-1;
}

function loadList(list){

    for(active of list){
        addToDo(active.name,active.id,active.done,active.trash);
    }
}
function addToDo(name,id,done,trash){
    if(trash){return};
    const JOB=done ? LINE :"";
    let htmlLi=`<li id="${id}" ><input type="checkbox">`+
                `<h5 class=${JOB}>${name}</h5>`+
                '<i class="fas fa-trash-alt"></i></li>';
    ullist.insertAdjacentHTML('beforeend',htmlLi);
}
function complete(element){
    let h5=element.parentNode.childNodes[1];
    console.log(h5);
    h5.classList.toggle('line');

    list[element.parentNode.id].done=list[element.parentNode.id].done ? false : true; 
}
function deleteL(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    list[element.parentNode.id].trash=true;
}

document.addEventListener('keyup',(event)=>{
    let data=input.value.trim();
    if (event.keyCode==13){
        if (data){
            id++;
            addToDo(data,id,false,false);
            list.push(
                {
                    name:data,
                    id:id,
                    done:false,
                    trash:false
                }
            )
        }
    }
   
    localStorage.clear();
    localStorage.setItem("todo",JSON.stringify(list));
});
ullist.addEventListener('click',(event)=>{
    if (event.target.tagName=='INPUT'){
        complete(event.target);
    }
    if (event.target.tagName=='I'){
        deleteL(event.target);
    }
    localStorage.clear();
    
    localStorage.setItem("todo",JSON.stringify(list));
})