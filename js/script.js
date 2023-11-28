"use strict";

const selectSaudiArabia = document.querySelector("#SA");

document.addEventListener("keydown", function (x) {
  console.log(x.key);
  if (x.key === "s") {
    // document.querySelector("#SA").style.fill = "#60b347";
    // console.log("ok");
    selectSaudiArabia.classList.add("select");
  }
  if (x.key === "Escape") {
    if (selectSaudiArabia.classList.contains("select"))
      selectSaudiArabia.classList.remove("select");
  }
});
