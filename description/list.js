// 1. `sessionStorage`에서 저장된 태그 가져오기
const storedTags = sessionStorage.getItem('tag');
console.log("세션에 저장된 태그:", storedTags);

const tagList = storedTags ? storedTags.split('#').filter(tag => tag) : [];
console.log("파싱된 태그 리스트:", tagList);

// 2. 필터링 로직
const filteredAnimes = animes.filter(anime => 
  tagList.every(tag => anime.tags.includes(tag)) // 모든 태그를 포함하는 애니메이션만 선택
);

console.log("필터링된 애니메이션:", filteredAnimes);

// 3. 필터링 결과를 DOM에 추가
const container = document.querySelector('.anime-container');

if (filteredAnimes.length === 0) {
  container.innerHTML = "<p>추천할 애니메이션이 없습니다.</p>";
} else {
  filteredAnimes.forEach(anime => {
    const animePoster = `
      <div class="anime" onclick="window.location.href='anime_detail.html?id=${anime.id}'">
        <img src="${anime.image}" alt="${anime.title}">
        <h3>${anime.title}</h3>
      </div>
    `;
    container.innerHTML += animePoster;
  });
}
