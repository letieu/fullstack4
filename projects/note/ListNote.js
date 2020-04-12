function ListNote(){
    this.notes={};
    this.size=0;
    this.addNote=function(note){
        let key=note.id;
            if(this.notes){
       
            this.notes[key]=note;
            this.size++;
        }else{
            this.notes= new Object();
            console.log(this.notes,'oday');
            this.notes[key]=note;
        }
    }   this.deleteNote=function(id){
        delete this.notes[id];
        this.size--;
    }
    this.loadData=function (){
        this.notes= JSON.parse( localStorage.getItem("notes"));
        this.size=this.notes ? Object.keys(this.notes).length : 0;
    }
    this.saveData=function(){
        let stringSave=JSON.stringify(this.notes);
        localStorage.clear();
        localStorage.setItem("notes",stringSave);
    }
}
a=[]
