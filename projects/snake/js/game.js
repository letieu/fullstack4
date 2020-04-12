const BOARD_WIDTH = 40;
const BOARD_HEIGHT = 30;
const CELL_SIZE = 20;
let self;
class Game {
    constructor(canvas, context) {
        self = this;
        self.snake = new Snake();
        self.bait = new Bait();
        self.drawer = new Draw(canvas, context);
        
    }
    main() {
            self.drawer.drawBoard();
            console.log(self.snake.body);
            self.snake.move();
            self.drawer.drawBait(self.bait);

            self.drawer.drawSnake(self.snake);
            self.snake.an(self.bait);

    }
    loop() {
        if (self.snake.die == true) {
            console.log(self.snake.die,'thua');
            return;
        }
        self.main();

       window.setTimeout(self.loop , 200)

    }


    keyHandler(event) {
        switch (event.keyCode) {
            case 38:
                self.snake.moveUp();
                break;
            case 40:
                self.snake.moveDown();
                break;
            case 39:
                self.snake.moveRight();
                break;
            case 37:
                self.snake.moveLeft();
        }
    }
}
