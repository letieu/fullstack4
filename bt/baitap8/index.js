let data1 = [
    { title: 'Java', content: 'Java is a general-purpose programming language that is class-based, object-oriented, and designed to have as few implementation dependencies as possible.' },
    { title: 'Python', content: "Python is an interpreted, high-level, general-purpose programming language. Created by Guido van Rossum and first released in 1991, Python's design philosophy emphasizes code readability with its notable use of significant whitespace" },
    { title: 'JavaScript', content: "JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. " }
]
let data2 = [
    { title: 'Classic Guitar', content: "The classical guitar is a member of the guitar family used in classical music. An acoustic wooden string instrument with strings made of gut or nylon, it is a precursor of the modern acoustic and electric guitars, both of which use metal strings" },
    { title: 'Arch Top Guitar', content: "An archtop guitar is a hollow steel-stringed acoustic or semiacoustic guitar with a full body and a distinctive arched top, whose sound is particularly popular with jazz, blues, and rockabilly players." }
]





function init() {
    document.addEventListener('click', function(event) {
        modal1.hide();
    })
    let tab1 = new Tab('tab1', data1);
    let tab2 = new Tab('tab2', data2);

    let modal1 = new Modal('modal1');
}


window.onload = init;