document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});



// document.querySelector('.mp').addEventListener('click', function () {
//   window.location.href = 'css-projects.html'; // Link to CSS projects page
// });

// document.querySelector('.mp').addEventListener('click', function () {
//   window.location.href = 'jsprojects.html'; // Link to JS projects page
// });
// type writer animation
let i = 0;
let textIndex = 0;
let speed = 50;
let texts = [`I'm a Web Developer`, `Code perfectionist`,`Strategic thinker`]; // Array of texts

function typeWriter() {
  let currentText = texts[textIndex];
  if (i < currentText.length) {
    document.getElementById("demo").innerHTML += currentText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    // Wait a bit before clearing and starting the next text
    setTimeout(() => {
      i = 0;
      textIndex = (textIndex + 1) % texts.length; // Cycle through the texts
      document.getElementById("demo").innerHTML = ''; // Clear the text
      setTimeout(typeWriter, 300); // Delay before the next text starts
    }, 1000); // 1-second pause at the end of the text
  }
}
window.onload = typeWriter;
// skills
$(`.circlechart`).circlechart();