let express = require('express');
let mustache = require('Mustache');

const fs = require('fs');

let app = express();
let port = 3000;


var view = {
    title: "Joe",
    calc: function () {
      return 2 + 4;
    }
  };

var output = mustache.render("{{title}} spends {{calc}}", view);

function loadTemplate(template) {
    return fs.readFileSync('./templates/index.html').toString();
}
var html = mustache.to_html(loadTemplate('myView'), {key: "xxx"});
console.log("--~" + html);

app.get('/', (req, res) => res.send(html));

app.use(express.static('layout'));
app.use('/layout', express.static('layout'))



//app.get('/', (req, res) => res.send('Hello World!' + output));
app.listen(port, () => console.log(`Training Diary App listening on Port ${port}!`));