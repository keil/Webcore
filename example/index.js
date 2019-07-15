let fibonacci = require("./fibonacci.js");
let Webcore = require("./../index.js");
let Document = require("./../lib/page.js");

Webcore.initialize(3000);

let label = new Document.Label("Number:", "number");
let text = new Document.Text("number");
let button = new Document.Button("Calculate", function(parameters) {

    let n = parameters.number;
    let r = fibonacci(n);

    let paragraph = new Document.Paragraph("Fibonacci number of " + n + " is " + r + ".");
    let back = new Document.Button("Back", function(parameters) {
        return page;
    });
    let form = new Document.Form([back]);
    let result = new Document.Page("Fibonacci", [paragraph, form]);

    return result;
});

let form = new Document.Form([label, text, button]);
let page = new Document.Page("Fibonacci", [form]);

Webcore.show(page);