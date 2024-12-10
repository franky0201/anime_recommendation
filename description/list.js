// 태그 가져오기
const storedTags = sessionStorage.getItem('tag');
const tagList = storedTags ? storedTags.split('#').filter(tag => tag) : [];

// 애니메이션 필터링
const filteredAnimes = animes.filter(anime => 
  tagList.every(tag => anime.tags.includes(tag))
);

// 결과 출력
const container = document.querySelector('.anime-container');

if (filteredAnimes.length === 0) {
  container.innerHTML = "<p>추천할 애니메이션이 없습니다.</p>";
} else {
  filteredAnimes.forEach(anime => {
    const animeElement = `
      <div class="anime">
        <img src="${anime.image}" alt="${anime.title}">
      </div>
    `;
    container.innerHTML += animeElement;
  });
}
