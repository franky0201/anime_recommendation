// script.js

// 버튼 클릭 시 다음 페이지로 이동
function navigateToNextPage() {
    // 현재 페이지의 파일 이름 가져오기
    const currentPage = window.location.pathname.split("/").pop();

    // 현재 페이지 번호 추출 (e.g., "questions1.html" -> 1)
    const currentNumber = parseInt(currentPage.match(/\d+/)?.[0]);

    if (!isNaN(currentNumber)) {
        // 다음 페이지 번호 계산
        const nextNumber = currentNumber + 1;

        // 다음 페이지로 이동
        window.location.href = `questions${nextNumber}.html`;
    } else {
        console.error("페이지 번호를 찾을 수 없습니다.");
    }
}

// 모든 버튼에 클릭 이벤트 추가
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn"); // 모든 버튼 선택
    buttons.forEach((button) => {
        button.addEventListener("click", navigateToNextPage); // 클릭 이벤트 추가
    });
});
