class Bait{
    constructor(){
        this.dot=new Dot(39,10);
        
    }
    next(){
        let x=Math.floor( Math.random() * 40);
        let y=Math.floor( Math.random()* 25);
        this.dot=new Dot(x,y);
    }
}