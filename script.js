document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("changeTextBtn");
    let message = document.getElementById("message");

    button.addEventListener("click", function() {
        message.textContent = "ボタンがクリックされました！";
        message.style.color = "#007bff";
    });
});
