const button = document.getElementById("button");
button.addEventListener("click", roll);
function roll() {
    const firstdice = document.getElementById("Dice1");
    const seconddice = document.getElementById("Dice2");
    const sum = document.getElementById("Sum");
    let first = Math.floor(Math.random() * (6) + 1);
    let second = Math.floor(Math.random() * (6) + 1);
    let total = first + second;
    firstdice.textContent = first;
    seconddice.textContent = second;
    sum.textContent = total;



}