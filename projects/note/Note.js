function Note(id, title, content) {
    this.title = title;
    this.content = content;
    this.id = id;
    this.time = getNow();
    this.setContent = function (content) {
        this.content = content;
        this.time = getNow();
    }
    this.setTitle = function (title) {
        this.title = title;
        this.time = getNow();
    }
}
function getNow() {
    let date = new Date();
    let now = date.getHours() + 'h - ' + date.getDate() + '/' + date.getMonth();
    return now;
}