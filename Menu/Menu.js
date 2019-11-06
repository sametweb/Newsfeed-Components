/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  "Students",
  "Faculty",
  "What's New",
  "Tech Trends",
  "Music",
  "Log Out"
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
// Stretch jQuery solution
let header = $(".header"); //Select header
let menu = $('<div class="menu"></div>'); // Create menu
let ul = $("<ul></ul>"); // Create unordered list

header.append(menu); //Add menu to header
menu.append(ul); //Add unordered list to menu

function createMenu(menuItem) {
  let li = $("<li></li>"); //Create list item
  li.text(menuItem); //Assign what will the menu item say
  ul.append(li); //Add list item to the list
}

menuItems.forEach(item => createMenu(item)); //Run createMenu for each item

var menuButton = $(".menu-button"); //Select menu button

menuButton.on("click", () => $(".menu").toggle("fast")); //jQuery version of addEventListener
