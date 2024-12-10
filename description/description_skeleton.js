document.addEventListener('DOMContentLoaded', function () {
  console.log("description_skeleton.js 실행됨");

  // 1. URL에서 `title` 파라미터 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const animeTitle = urlParams.get('title');

  console.log("받아온 애니메이션 제목:", animeTitle);

  // 2. `animes` 배열에서 해당 제목의 애니메이션 찾기
  const anime = animes.find(a => a.title === animeTitle);

  if (anime) {
    // 3. HTML 요소에 데이터 넣기
    document.getElementById('anime-title').innerText = anime.title;
    document.getElementById('anime-episode').innerText = `총 ${anime.episodes}화`;
    document.getElementById('anime-description').innerText = anime.description;
    document.getElementById('anime-image').src = anime.image;
    document.getElementById('anime-video').src = anime.videoUrl;
    console.log("애니메이션 데이터 로드 완료:", anime);
  } 
});
