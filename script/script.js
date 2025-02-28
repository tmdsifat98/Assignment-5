// here is the dynamic background colour change
let indexNum = 0;
let rotation = 0;
document
  .getElementById("theme-btn")
  .addEventListener("click", function (event) {
    rotation += 30;
    document.getElementById("rotate-theme").style.transform = `rotate(${rotation}deg)`;
    indexNum++;
    let themeChange = document.querySelectorAll(".bg-theme");
    const colorPallet = [
      "bg-red-300",
      "bg-green-400",
      "bg-purple-300",
      "bg-blue-300",
      "bg-gray-300",
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
  });
