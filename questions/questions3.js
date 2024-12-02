// script.js

// 버튼 클릭 시 이동하는 함수
function navigateToNextPage() {
    window.location.href = "questions5.html"; // 이동할 페이지 URL
}

// 모든 버튼에 클릭 이벤트를 추가하는 코드
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn"); // 모든 버튼을 선택
    buttons.forEach((button) => {
        button.addEventListener("click", navigateToNextPage); // 클릭 이벤트 추가
    });
});
