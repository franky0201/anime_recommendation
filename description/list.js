document.addEventListener("DOMContentLoaded", () => {
    console.log("list.js 실행됨");
  
    const storedTags = sessionStorage.getItem('tag');
    console.log("세션에 저장된 태그:", storedTags);
  
    const tagList = storedTags ? storedTags.split('#').filter(tag => tag) : [];
    console.log("파싱된 태그 리스트:", tagList);
  
    const filteredAnimes = animes.filter(anime =>
      tagList.every(tag => anime.tag.includes(tag))
    );
    console.log("필터링된 애니메이션 데이터:", filteredAnimes);
  
    const container = document.querySelector('.anime-container');
  
    if (filteredAnimes.length === 0) {
      container.innerHTML = "<p>추천할 애니메이션이 없습니다.</p>";
    } else {
      filteredAnimes.forEach(anime => {
        const animePoster = `
          <div class="anime" onclick="window.location.href='description.html?title=${encodeURIComponent(anime.title)}'">
            <img src="${anime.image}" alt="${anime.title}">
            <h3>${anime.title}</h3>
          </div>
        `;
        console.log("생성된 HTML 코드:", animePoster);
        container.innerHTML += animePoster;
      });
      console.log("anime-container 내용:", container.innerHTML);
    }
  });
  