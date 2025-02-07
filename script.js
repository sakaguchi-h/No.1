// Get the button and the additional content section
const exploreBtn = document.getElementById('exploreBtn');
const explodingContent = document.createElement('div');
explodingContent.classList.add('exploding-content');
explodingContent.innerHTML = `
    <h3>🌟 詳しく見る内容 🌟</h3>
    <p>ここにもっとエキサイティングな情報や内容が表示されます！</p>
`;

// Append the new content below the hero section
document.body.appendChild(explodingContent);

// Add a click event listener to the "詳しく見る" button
exploreBtn.addEventListener('click', function () {
    // Add the flashy animation class
    exploreBtn.classList.add('flashy-anim');

    // Show the new content with a smooth animation
    setTimeout(function () {
        explodingContent.classList.add('show');
    }, 1000); // Wait for the animation to finish before showing content
});
