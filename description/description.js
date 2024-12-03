document.addEventListener('DOMContentLoaded', function () {
    // JSON 파일을 동적으로 불러오는 함수
    async function fetchAnimeData(fileName) {
      try {
        // JSON 파일 경로 설정
        const response = await fetch(`description_JSON/${fileName}`);
        const data = await response.json();
  
        // HTML 요소 업데이트
        document.getElementById('anime-title').innerText = data.title;
        document.getElementById('anime-episode').innerText = `총 ${data.episodes}화`;
        document.getElementById('anime-description').innerText = data.description;
        document.getElementById('anime-image').src = data.image;
        document.getElementById('anime-video').src = data.videoUrl;
      } catch (error) {
        console.error('JSON 파일을 불러오는 데 실패했습니다:', error);
      }
    }
  
    // 예시로 01.json 파일 불러오기
    fetchAnimeData('01.json');
  });
  