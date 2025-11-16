// typing Animation
var typed = new Typed('.animate', {
  strings: ["Designer", "Photographer","Freelancer"],
  typeSpeed: 120,
  backspeed:70,
  loop:true
});
// Number counting Animation
function startCounter(counter) {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const duration = 1000; 
      const stepTime = 10;   
      const increment = target / (duration / stepTime);

      function updateCounter() {
        count += increment;
        if (count < target) {
          counter.textContent = Math.floor(count);
          setTimeout(updateCounter, stepTime);
        } else {
          counter.textContent = target;
        }
      }
      updateCounter();
    }

    const counters = document.querySelectorAll('.counter');

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          startCounter(entry.target);
          obs.unobserve(entry.target); 
        }
      });
    });

    counters.forEach(counter => observer.observe(counter));
