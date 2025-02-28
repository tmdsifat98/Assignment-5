// here is the dynamic background colour change
let indexNum = 0;
let rotation = 0;
document
  .getElementById("theme-btn")
  .addEventListener("click", function (event) {
    rotation += 30;
    document.getElementById(
      "rotate-theme"
    ).style.transform = `rotate(${rotation}deg)`;
    let themeChange = document.querySelectorAll(".theme-change");
    const colorPallet = [
      "bg-red-200",
      "bg-green-200",
      "bg-purple-200",
      "bg-blue-200",
      "bg-violet-200",
      "bg-pink-200",
      "bg-orange-200",
      "bg-amber-200",
    ];
    if (indexNum > 7) {
      indexNum = 0;
    }
    let newColor = colorPallet[indexNum];
    for (let i = 0; i < themeChange.length; i++) {
      for (let color of colorPallet) {
        themeChange[i].classList.remove(color);
      }
      themeChange[i].classList.add(newColor);
    }
    indexNum++;
  });

// today update
let todayDate = new Date();
const toDay = todayDate.getDay();
const shortDay = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
document.getElementById("dayName").innerText = shortDay[toDay] + " " + ",";

// date update
const nameOfMonth = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const month = todayDate.getMonth();
const day = todayDate.getDate();
const year = todayDate.getFullYear();
document.getElementById("day-month-year").innerText =
  nameOfMonth[month] + " " + day + " " + year;
// Button click event
const cards = document.querySelectorAll(".card");
let remainTasks = cards.length;
document.getElementById("task-remain").innerText = remainTasks;
console.log(remainTasks);
for (let i = 0; i < cards.length; i++) {
  const cardBtn = cards[i].querySelector(".card-btn");
  cardBtn.addEventListener("click", function () {
    //   time update
    let todayDate = new Date();
    let hour = todayDate.getHours();
    let minute = todayDate.getMinutes();
    let second = todayDate.getSeconds();
    let format = "";
    if (hour >= 12) {
      format = "PM";
    } else {
      format = "AM";
    }
    hour = hour % 12;
    if (hour === 0) {
      hour = 12;
    }
    if (minute < 10) {
      minute = "0" + minute;
    }
    if (second < 10) {
      second = "0" + second;
    }
    cardBtn.disabled = true;
    cardBtn.classList.add("bg-gray-300", "cursor-not-allowed");
    const boardCount = document.getElementById("board-count").innerText;
    const boardCountNum = parseInt(boardCount);
    const cardTitle = cards[i].querySelector(".btn-title").innerText;
    const historySection = document.getElementById("history-section");
    const div = document.createElement("div");
    div.classList.add("bg-secondary", "my-1", "mx-3", "p-3", "rounded-lg");
    div.innerText = `You have Complete The Task ${cardTitle} at ${hour}:${minute}:${second} ${format}`;
    document
      .getElementById("history-btn")
      .addEventListener("click", function () {
        div.classList.add("hidden");
      });
    if (remainTasks > 0) {
      alert("Board updated successfully");
      remainTasks = remainTasks - 1;
      document.getElementById("task-remain").innerText = remainTasks;
      document.getElementById("board-count").innerText = boardCountNum + 1;
      historySection.appendChild(div);
      console.log(remainTasks);
      if (remainTasks === 0) {
        alert("congrates!!! You have completed all the current task");
      }
    }
  });
}

// blog page switch
document.getElementById('middle-blog-title').addEventListener('click',function(){
    window.location.href = 'blog.html'
})