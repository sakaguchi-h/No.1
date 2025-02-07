document.getElementById("exploreBtn").addEventListener("click", function() {
    // ① 背景色をランダムに変更
    const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FFC733"];
    document.body.style.background = colors[Math.floor(Math.random() * colors.length)];

    // ② ポップアップメッセージを表示
    const popup = document.createElement("div");
    popup.innerText = "🚀 ようこそ！未来へ出発！ 🌈";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#fff";
    popup.style.padding = "20px";
    popup.style.borderRadius = "10px";
    popup.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.2)";
    popup.style.fontSize = "20px";
    popup.style.fontWeight = "bold";
    popup.style.zIndex = "1000";
    document.body.appendChild(popup);

    // ③ 2秒後に消える
    setTimeout(() => {
        popup.style.opacity = "0";
        setTimeout(() => document.body.removeChild(popup), 500);
    }, 2000);

    // ④ 絵文字をランダムに飛ばす
    for (let i = 0; i < 10; i++) {
        const emoji = document.createElement("div");
        emoji.innerText = ["🎉", "🚀", "✨", "💡", "🌈"][Math.floor(Math.random() * 5)];
        emoji.style.position = "fixed";
        emoji.style.left = Math.random() * window.innerWidth + "px";
        emoji.style.top = Math.random() * window.innerHeight + "px";
        emoji.style.fontSize = "30px";
        emoji.style.opacity = "1";
        emoji.style.transition = "opacity 1s, transform 1s";
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.style.opacity = "0";
            emoji.style.transform = "translateY(-50px)";
            setTimeout(() => document.body.removeChild(emoji), 1000);
        }, 500);
    }

    // ⑤ 自動スクロールで次のセクションへ
    setTimeout(() => {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    }, 1000);
});
