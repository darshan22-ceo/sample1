const button = document.getElementById("btn");
const message = document.getElementById("message");

let count = 0;

button.addEventListener("click", () => {
    count++;
    message.textContent = `🎉 Button clicked ${count} time${count > 1 ? "s" : ""}!`;
});