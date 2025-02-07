document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("changeTextBtn");
    let message = document.getElementById("message");

    button.addEventListener("click", function() {
        message.textContent = "ボタンがクリックされました！";
        message.style.color = "#007bff";
    });

    // お問い合わせフォームの処理
    let form = document.getElementById("contactForm");
    let formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // デフォルトの送信を防ぐ

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;

        if (name === "" || email === "") {
            formMessage.textContent = "名前とメールアドレスを入力してください！";
            formMessage.style.color = "red";
        } else {
            formMessage.textContent = `ありがとうございます！ ${name} さん、ご連絡を確認しました。`;
            formMessage.style.color = "green";
        }
    });
});
