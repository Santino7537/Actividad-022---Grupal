window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'linear-gradient(90deg, #007bff, #00bcd4)';
  } else {
    header.style.background = 'linear-gradient(90deg, #00bcd4, #007bff)';
  }
});

document.getElementById("alert-btn").addEventListener("click", () => {
    alert("¡Hola! Has hecho clic en el botón 😄");
  });

  const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100; // controla la velocidad

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 20); // cada 20 ms
    } else {
      counter.innerText = target; // asegura valor final exacto
    }
  };

  updateCount();
});
