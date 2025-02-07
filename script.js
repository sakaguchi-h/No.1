// メッセージ表示
document.getElementById('changeTextBtn').addEventListener('click', function() {
    document.getElementById('message').textContent = "坂口CEOからの特別メッセージです！";
});

// フォーム送信時のメッセージ表示
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('formMessage').textContent = "お問い合わせありがとうございます！";
});

// スムーズスクロール
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// ハンバーガーメニューの切り替え
function toggleMenu() {
    document.getElementById("nav-menu").classList.toggle("show");
}
