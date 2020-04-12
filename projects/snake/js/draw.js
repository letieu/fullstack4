const SNAKE_COLOR='red';
const BOARD_COLOR='green';
const BAIT_COLOR='yellow';
const NET_COLOR = 'blue';

class Draw{
    constructor(canvas,context){
        this.canvas = canvas;
        this.context = context;
        
    }
    drawSnake(snake){
        for (let dot of snake.body){
            this.drawDot(dot);
        }
    }
    drawBoard(){
        let ctx=this.context;
        ctx.fillStyle = BOARD_COLOR;
        ctx.fillRect(0,0,800,500)

        for (let i=0;i<800;i+=20){
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, 500);
            ctx.stroke();
        }
        for (let i=0;i<800;i+=20){
            ctx.beginPath();
            ctx.moveTo(0,i);
            ctx.lineTo(800,i);
            ctx.stroke();
        }
    }
    drawBait(bait){ 
        let x= bait.dot.x *20;
        let y= bait.dot.y *20;
        
        this.context.fillStyle =BAIT_COLOR;
        this.context.fillRect(x,y,20,20);


    }
    drawDot(dot){
        let  x= dot.x * 20;
        let  y=dot.y * 20;
        this.context.fillStyle = SNAKE_COLOR;
        this.context.fillRect(x,y,20,20);
    }
}