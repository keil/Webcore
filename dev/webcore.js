
// fib



let [Webcore, Page] = require("webcore");


let document = new Page.Document();



function fib(n) {
    return 0;
}

Page.initialize([])
let document = Page.getDocument();




let lable = new Page.Label("Number");
let text = new Textfield("number");
let button = new Button("Submit", (content) => {
    let n = content.get(text.getName()); // possible
    let result = fibonacci(n);
    let paragraph = new Paragraph(result);
    document.add(paragraph);
    document.show(); // how to distinguish between button operation and notmal call
});

// a view is a div



let form = new Form(); // how to register button to get called when button gets clicked
form.add(lable);
form.add(text);
form.add(button);
//form.addAll(lable, text, button);

document.add(fomm);


document.initialize();

document.show();