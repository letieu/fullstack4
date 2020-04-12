const RIGHT = 'right';
const LEFT = 'left';
const UP = 'up';
const DOWN = 'down';
class Snake {
    constructor() {
        this.body = [
            new Dot(20, 10),
            new Dot(21, 10),
            new Dot(22, 10),
        ];
        this.direction = RIGHT;
        this.die = false;
        this.length = this.body.length;
        this.eat = false;
    }
    an(bait) {

        if ((this.head().y == bait.dot.y) && (this.head().x == bait.dot.x)) {
            this.eat = true;
            bait.next();
        }
    }
    head() {
        this.length = this.body.length;
        return this.body[this.length - 1]

    }
    move() {
        let head = this.head();
        let x = head.x;
        let y = head.y;
        switch (this.direction) {
            case RIGHT:
                x += 1;
                break;
            case LEFT:
                x -= 1;
                break;
            case UP:
                y -= 1;
                break;
            case DOWN:
                y += 1;
        }
        if (this.canMove()) {
            let newHead = new Dot(x, y);
            this.body.push(newHead);
            this.length = this.body.length;

            if (this.eat == false) {
                this.body.shift();
            }
            this.eat = false;
        } else {
            this.die = true;
        }

    }
    moveUp() {
        if (this.direction != DOWN) {
            this.direction = UP;
        }

    }

    moveDown() {
        if (this.direction != UP) {
            this.direction = DOWN;
        };


    }
    moveRight() {
        if (this.direction != LEFT) {
            this.direction = RIGHT;
        };


    }
    moveLeft() {
        if (this.direction != RIGHT) {
            this.direction = LEFT;
        };


    }
    canMove() {
        let x = this.head().x;
        let y = this.head().y;
        if (x >= 40 || x < 0) {
            return false;
        }
        if (y >= 25 || y <= 0) {
            return false;
        }
        if (this.body.indexOf(this.head()) < this.length - 2){
            console.log()
            return false;
        }
        return true;
    }

}