const AnimeEnum = {
    ANIME_1: 0,
    ANIME_2: 1,
    ANIME_3: 2,
    ANIME_4: 3,
    // 더 추가 가능
  };
  
  const animes = [
    {
      title: "페이트 시리즈",
      episodes: 50,
      description: "애니메이션 1의 설명입니다.",
      image: "텀프자료/ANIME/페이트.jpg",
      videoUrl: "https://www.youtube.com/embed/example1"
    },
    {
        title: "제로의 사역마",
        episodes: 24,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/제로의사역마.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "데스노트",
        episodes: 37,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/데스노트.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "스즈미야 하루히의 우울",
        episodes: 14,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/하루히.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "헬싱",
        episodes: 10,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/헬싱.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "코드기어스:반역의 를르슈",
        episodes: 50,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/코드기어스.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "클라나드",
        episodes: 44,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/클라나드.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "천원돌파 그렌라간",
        episodes: 27,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/그렌라간.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "나츠메 우인장",
        episodes: 91,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/나츠메우인장.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "늑대와 향신료",
        episodes: 25,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/늑대와향신료.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "어떤 과학의 초전자포",
        episodes: 74,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/어과초.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "토라도라",
        episodes: 26,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/토라도라.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "너에게 닿기를",
        episodes: 43,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/너에게닿기를.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "모노가타리 시리즈",
        episodes: 103,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/모노가타리.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "케이온!",
        episodes: 41,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/케이온.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "강철의 연금술사",
        episodes: 64,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/강연금.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "듀라라라",
        episodes: 61,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/모노가타리.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "약사의 혼잣말",
        episodes: 24,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/약사의혼잣말.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "슈타인즈 게이트",
        episodes: 25,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/슈타인즈게이트.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "일상",
        episodes: 26,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/일상.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "헌터x헌터",
        episodes: 148,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/헌헌.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "미래일기",
        episodes: 27,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/미래일기.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "그날 본 꽃의 이름을 우리는 아직 모른다",
        episodes: 11,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/아노하나.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "마법소녀 마도카 마기카",
        episodes: 25,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/마마마.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "죠죠의 기묘한 모험 2부",
        episodes: 17,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/죠죠2부.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "죠죠의 기묘한 모험 3부",
        episodes: 48,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/죠죠3분.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "빙과",
        episodes: 22,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/빙과.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "사쿠라장의 애완그녀",
        episodes: 24,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/사쿠라장의애완그녀.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "사이코패스",
        episodes: 22,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/사이코패스.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "소드아트 온라인",
        episodes: 25,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/소아온.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "경계의 저편",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/경계의저편.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "킬라킬",
        episodes: 25,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/킬라킬.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "진격의 거인",
        episodes: 89,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/진격거.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "도쿄구울",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/도쿄구울.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "월간순정 노자키군",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/노자키군.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "니세코이",
        episodes: 32,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/니세코이.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "일곱개의 대죄",
        episodes: 48,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/칠대죄.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "하이큐!!",
        episodes: 85,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/하이큐.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "슬램덩크",
        episodes: 101,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/슬램덩크.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "바라카몬",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/바라카몬.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "기생수",
        episodes: 24,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/기생수.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "4월은 너의 거짓말",
        episodes: 23,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/4구라.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "역시 내 청춘 러브코미디는 잘못됐다",
        episodes: 41,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/내청코.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "오버로드",
        episodes: 26,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/오버로드.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "노 게임 노 라이프",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/노겜노라.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "암살교실",
        episodes: 48,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/암살교실.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "원펀맨",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/원펀맨.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "나만이 없는 거리",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/나없거.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "Re:제로부터 시작하는 이세계 생활",
        episodes: 66,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/리제로.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "이 멋진 세계에 축복을!",
        episodes: 33,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/코노스바.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "나의 히어로 아카데미아",
        episodes: 162,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/나히아.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "메이드 인 어비스",
        episodes: 25,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/메인어.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "코바야시네 메이드래곤",
        episodes: 27,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/메이드래곤.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "유녀전기",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/유녀전기.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "유루캠",
        episodes: 37,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/유루캠.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "오타쿠에게 사랑은 어려워",
        episodes: 11,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/오타코이.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "사랑은 비가 갠 뒤처럼",
        episodes: 25,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/사랑은비가갠뒤처럼.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "약속의 네버랜드",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/약네버.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "카구야님은 고백받고 싶어",
        episodes: 37,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/카구야.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "닥터스톤",
        episodes: 58,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/닥터스톤.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "귀멸의 칼날",
        episodes: 56,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/귀칼.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "사카모토입니다만?",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/사카모토.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "학교생활!",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/학교생활.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "주술회전",
        episodes: 47,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/주술회전.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "호리미야",
        episodes: 26,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/호리미야.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "임금님 랭킹",
        episodes: 23,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/임금님랭킹.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "에이티식스",
        episodes: 23,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/에이티식스.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "아카메가 벤다!",
        episodes: 24,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/아카메가벤다.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "최애의 아이",
        episodes: 24,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/최애의아이.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "어나더",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/어나더.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "스파이 패밀리",
        episodes: 37,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/스파패.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "봇치 더 록!",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/봇치더록.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "체인소맨",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/체인소맨.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "청춘 돼지는 바니걸 선배의 꿈을 꾸지 않는다",
        episodes: 13,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/청춘돼지.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "그랑블루",
        episodes: 12,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/슈타인즈게이트.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "시원찮은 그녀를 위한 육성방법",
        episodes: 23,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/사에카노.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "그 비스크돌은 사랑을 한다",
        episodes: 25,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/비스크돌.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "이세계 삼촌",
        episodes: 13,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/이세계삼촌.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "쓰르라미 울 적에",
        episodes: 51,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/쓰르라미.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "단간론파",
        episodes: 13,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/단간론파.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "장송의 프리렌",
        episodes: 28,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/프리렌.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "던전밥",
        episodes: 24,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/던전밥.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "식극의 소마",
        episodes: 86,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/식극의소마.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "불꽃소방대",
        episodes: 48,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/불꽃소방대.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "여친, 빌리겠습니다",
        episodes: 36,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/렌탈여친.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "어둠의 실력자가 되고 싶어서!",
        episodes: 32,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/카게지츠.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "한마 바키",
        episodes: 39,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/한마바키.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "5등분의 신부",
        episodes: 24,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/5등분.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "마슐",
        episodes: 24,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/마슐.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      },
      {
        title: "이세계 콰르텟",
        episodes: 24,
        description: "애니메이션 1의 설명입니다.",
        image: "텀프자료/ANIME/이세계 콰르텟.jpg",
        videoUrl: "https://www.youtube.com/embed/example1"
      }
    ];
  ;
  
description_data.js