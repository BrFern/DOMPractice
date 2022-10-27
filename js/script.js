//let titleElement = document.getElementById("title");
//console.log(titleElement);

//save our element as a variable
//select H1 element by ID

let title = document.getElementById("title");

//console.log(title);

let example = document.querySelector("p")
//console.log(example); //null because we don't have a p element. 

let paragraph = document.querySelector(".cool") //don't forget the dot when calling a class
//console.log(paragraph);

//textContent- add an HTML plain text
//paragraph.textContent += "Hello World!";
//console.log(paragraph.textContent);

//innerHTML-create and insert any HTML elements
//paragraph.innerHTML += `<a href = "google"> Google </a>`

//paragraph.innerHTML = "Comments for <strong>Today</strong>"; //Shows bold unless the one underneath is commented out
//paragraph.textContent = "Comments for <strong>Today</strong>"; //Shows HTML tags since it is plain text only

title.style.textAlign = "center";
paragraph.style.color = "blue";
console.log (paragraph.getAttribute("class"));//cool-because of the class
//console.log (paragraph.getAttribute("id")); //null because it is not set
paragraph.setAttribute("id", "helloWorld"); // does not print to console, but can be found in elements
//updates the value
console.log(paragraph.getAttribute("id"));

let a = document.querySelector("a")
a.setAttribute("href", "https://google.com");

let list = document.getElementsByTagName("li")
console.log(list[0]);

let lists = document.getElementsByTagName("li");
console.log(lists)

//let comments = document.querySelectorAll(".comments")
//console.log(comments);
// //for... of 
// for (const comment of comments) {
//     console.log(comment);
//   }
//   //for..each
//   comments.forEach(function (comment) {
//     console.log(comment);
//   });
//for..each arrow function
  //comments.forEach((comment)=>{console.log(comment)})

//   let comments= document.querySelectorAll(".comment")
//   for (const comment of comment) {
//     console.log(comment);
//     comment.setAttribute("style", "font-size: 30px")
//   }
 
  for(const comment of comments){
    console.log(comment);
    comment.setAttribute("style", "font-size: 30px")
}

  


