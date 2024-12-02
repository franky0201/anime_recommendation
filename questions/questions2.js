// script.js

// 버튼 클릭 시 해당 페이지로 이동
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn"); // 모든 버튼 선택

    buttons[0].addEventListener("click", function () {
        window.location.href = "questions4-1.html"; // 첫 번째 버튼 -> questions4-1.html
    });

    buttons[1].addEventListener("click", function () {
        window.location.href = "questions4-2.html"; // 두 번째 버튼 -> questions4-2.html
    });

    buttons[2].addEventListener("click", function () {
        window.location.href = "questions4-3.html"; // 세 번째 버튼 -> questions4-3.html
    });

    buttons[3].addEventListener("click", function () {
        window.location.href = "questions4-4.html"; // 네 번째 버튼 -> questions4-4.html
    });
});
