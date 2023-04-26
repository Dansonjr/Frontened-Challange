let nums = document.getElementById("num");
let count = 0;
letnum = 3;
const unseenCollection = document.getElementsByClassName("unseen");

Array.from(unseenCollection).forEach((element) => {
  element.addEventListener("click", () => {
    element.classList.remove("unseen");
    reduceNumber();
  });
});

function reduceNumber() {
  letnum = letnum - 1;
  console.log(letnum);
  nums.innerHTML = letnum;
}

function decrement() {
  nums.innerText = count;
  //   console.log(count);
}
function myFunction() {
  //   document.getElementById("myDiv").style.backgroundColor = "white";
  //   document.getElementById("myDiv1").style.backgroundColor = "white";
  //   document.getElementById("myDiv2").style.backgroundColor = "white";
  const unseen = document.getElementsByClassName("unseen");
  Array.from(unseen).forEach((element) => {
    element.classList.remove("unseen");
  });
  // console.log(unseen)
}
// const myDiv= document.getElementById(myDiv);
// myDiv.addEventListener('click'() => {
//     myDiv.style.background='none',
// });

function seen(event) {
  console.log(event.target);
}
