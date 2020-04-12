function init() {
    let canvas = document.getElementById('cv');
    let context = canvas.getContext("2d");
    let game = new Game(canvas, context);
    window.addEventListener('keydown', game.keyHandler);
    game.loop();
    console.log(game.snake.body);
}
window.onload = init();