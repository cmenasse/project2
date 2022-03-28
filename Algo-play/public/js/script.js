document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("Algo-play JS imported successfully!");
  },
  false
);
function menuToggle(){
  const toggleMenu = document.querySelector('.menu')
  toggleMenu.classList.toggle('active')  
}
