const input = document.querySelector('input[type="number"]');
const spans = document.querySelectorAll('#serv-value');

// Get the start value of the Number of Serves
let previousValue;

input.addEventListener('beforeinput', () => {
  previousValue = input.value;
});

// Input element listener
input.addEventListener('change', () => {
  const value = input.value;
  spans.forEach(span => {
    const currentValue = parseInt(span.textContent);
    span.textContent = currentValue/previousValue * value;
  });
});

/*
                    The ingredients measurements method is different from ingredient to another, (L, ML, Spoon, Cup, dl and so on)
                    I set the number of the start portion is 2, and the change of amount should be changed by 2 only.
                    If the change happen in different values (such as 3, 5 or even 1), this can cause an unreasonable value
                    such as 1.13 spoon!
*/