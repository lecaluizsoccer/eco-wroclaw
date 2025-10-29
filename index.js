import { inicioHtml, ecoHints } from "./data.js";
const main = document.querySelector("main");
const body = document.querySelector("body");

// SECTION 4 HTML (the daily tip)
const section4 = `
<section class="main-section section-4">
  <div class="bottom-card">
    <h2>💡Sustainable Fact of the Day</h2>
    <p>🌍 ${ecoHints[getday() - 1].hint}</p>
  </div>
</section>`;

// INITIAL RENDER
renderHtml(inicioHtml[0].html);

// VARIABLES
let percentCount = 0;
let progressCount = 0;


// EVENT LISTENER
body.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("fa-leaf") ||
    e.target.classList.contains("inicio")
  ) {
    renderHtml(inicioHtml[0].html);
  } else if (
    e.target.classList.contains("fa-lightbulb") ||
    e.target.classList.contains("dicas")
  ) {
    main.innerHTML = inicioHtml[1].html;
  } else if (
    e.target.classList.contains("fa-bullseye") ||
    e.target.classList.contains("desafios")
  ) {
    main.innerHTML = inicioHtml[2].html;
    const checkboxes = document.querySelectorAll(".checkbox-class");
   
    
    updateState();


  } else if (
    e.target.classList.contains("fa-location-dot") ||
    e.target.classList.contains("mapa")
  ) {
    main.innerHTML = inicioHtml[3].html;
  } else if (
    e.target.classList.contains("fa-circle-info") ||
    e.target.classList.contains("sobre")
  ) {
    main.innerHTML = inicioHtml[4].html;
  }
})


// FUNCTIONS

 
function updateState(){
      
  const checkboxes = document.querySelectorAll(".checkbox-class");
  // const paragraphProgress = document.querySelector(".test-progress");
        const checkboxStates = [];
        // let trueCount = 0;
  checkboxes.forEach((checkbox, index) => {
    checkbox.checked =
      localStorage.getItem(`checkbox-${index}`) === "true";
    checkboxStates.push(checkbox.checked);

    // if (checkboxStates[index] === true) {
    //   trueCount += 1;
    // }
    //  paragraphProgress.innerHTML = `<p class="test-progress">${trueCount} of ${checkboxes.length} challenges completed</p>`;
  });


  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", (e) => {
      localStorage.setItem(`checkbox-${index}`, checkbox.checked);
      refresh();
      // paragraphProgress.innerHTML = `<p class="test-progress">${trueCount} of ${checkboxes.length} challenges completed</p>`;
      
      
    });
  });

    refresh();

}


function refresh() {
  const paragraphProgress = document.querySelector(".test-progress");
  const innerbar = document.querySelector(".inner-bar");

  let trueCount = 0;
  const checkboxes = document.querySelectorAll(".checkbox-class");

  checkboxes.forEach((checkbox, index) => {
    if (checkbox.checked === true) trueCount++;
  });
  // update the progress paragraph
  paragraphProgress.innerHTML = `${trueCount} of ${checkboxes.length} challenges completed`;

  // update the progress bar
  innerbar.style.width = `${trueCount * 17}%`;
}

function renderHtml(html) {
  main.innerHTML = html;
  main.innerHTML += section4;
}

function getday() {
  const today = new Date();
  return today.getDate();
}
