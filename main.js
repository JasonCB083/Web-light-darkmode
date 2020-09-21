const modeBtn = document.querySelector("#mode-btn");
let darkMode = window.matchMedia("(prefers-color-scheme:dark)")

// below code before adjusting for automatic mode detection
// modeBtn.addEventListener("click", e => {
//   document.body.classList.toggle("light");
//   modeBtn.innerText = document.body.classList.contains("light") ? "Dark Mode: Off" : "Dark Mode: On"
// });


modeBtn.addEventListener("click", () =>
setColorScheme(document.body.classList.contains("light"))
);

darkMode.addEventListener("change", (e) => setColorScheme(e.matches));


function setColorScheme(isDark) {
  if (isDark){
    document.body.classList.remove("light");
    modeBtn.innerText = "Dark Mode: On";
  } else {
    document.body.classList.add("light");
    modeBtn.innerText = "Dark Mode: Off";
  }
}
