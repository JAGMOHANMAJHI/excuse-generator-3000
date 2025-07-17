const excuses = [
  "My dog ate my motivation.",
  "There was a solar flare. You probably felt it too.",
  "I got stuck in a philosophical debate with my toaster.",
  "The universe told me to wait.",
  "I ran out of clean thoughts.",
  "My schedule collided with Mercury retrograde.",
  "I was testing if procrastination is a renewable resource.",
  "Aliens abducted my work ethic."
];

document.getElementById("generate-btn").addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * excuses.length);
  document.getElementById("excuse-text").innerText = excuses[randomIndex];
});
