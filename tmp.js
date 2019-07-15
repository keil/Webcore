let webcore = require('webcore');
let {App} = require('webcore');


let app = App.init();




/*

// about me


let {App} = require('webcore');




*/


// Masterpage
let Masterpage = require('webcore/masterpage');

let masterpage = new Masterpage(function(engine) {
  engine.assign("key", value);

  engine.show("/templates/masterpages/default.tpl");
});




// abstract masterpage <-- abstract page
//     |                     |
// masterpage          <-- pages





// Page: home



let 


let Page = require('page');

let home = new Page(masterpage, function(egnine) {
  eggine.assign("content", "/templates/home.tpl");

});




function Page() {

}


function Masterpage() {

}

// todo, or other name: page, dom,  context


let Page = function Page() {
  if(!(this instanceof Page)) return new Page(...arguments);


}
Page.prototype = Object.create(Masterpage.prototype);




let home = new Page({name: "Home"}, function(view) { 
  view.assign('CONTENT', "home.tpl")
});



