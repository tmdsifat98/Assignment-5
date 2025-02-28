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

    let themeChange = document.querySelectorAll(".bg-gray-200");
    const colorPallet = [
      "bg-red-300",
      "bg-green-400",
      "bg-purple-300",
      "bg-blue-300",
      "bg-violet-300",
      "bg-pink-300",
      "bg-orange-300",
      "bg-amber-300",
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
const todayDate = new Date();
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
