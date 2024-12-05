// 페이지가 로드되면 특정 애니메이션을 선택하여 화면에 표시
document.addEventListener('DOMContentLoaded', function () {
  // 원하는 애니메이션을 Enum을 사용해 선택
  const selectedAnime = AnimeEnum.ANIME_1; // ANIME_1 대신 ANIME_2, ANIME_3 등을 선택할 수 있음
  
  // 선택된 애니메이션의 데이터를 가져옴
  const anime = animes[selectedAnime];

  // HTML 요소에 데이터 넣기
  document.getElementById('anime-title').innerText = anime.title;
  document.getElementById('anime-episode').innerText = `총 ${anime.episodes}화`;
  document.getElementById('anime-description').innerText = anime.description;
  document.getElementById('anime-image').src = anime.image;
  document.getElementById('anime-video').src = anime.videoUrl;
});
