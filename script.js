// ボタンがクリックされたときの処理
document.addEventListener("DOMContentLoaded", function() {
    let button = document.querySelector("button");
    let message = document.createElement("p");

    button.addEventListener("click", function() {
        message.textContent = "ボタンがクリックされました！";
        document.body.appendChild(message);
    });
});
