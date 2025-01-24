// 오디션 인포
const auditionInfoData = await AuditionInfo.create (
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-7.jpg',
    title: "뮤지컬 팬텀 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-11.jpg',
    title: "뮤지컬 루카스 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-4.jpg',
    title: "뮤지컬 베르사유의 장미 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-8.jpg',
    title: "뮤지컬 웃는남자 오디션",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-12.jpg',
    title: "뮤지컬 로보카 폴리 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-theater-4.jpg',
    title: "연극 너에게로 가는 길 오디션 공고",
  },
  {
    imageUrl: '/images/audition/audition-musical-9.jpg',
    title: "뮤지컬 빌리엘리어트 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-5.jpg',
    title: "뮤지컬 한복 입은 남자 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-6.jpg',
    title: "뮤지컬 마타하리 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-theater-6.jpg',
    title: "연극 베를리너 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-1.jpg',
    title: "브로드웨이 42번가 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-theater-1.jpg',
    title: "연극 햄릿 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-10.jpg',
    title: "뮤지컬 명성황후 아역 오디션 공고",
  },
  {
    imageUrl: '/images/audition/audition-musical-3.jpg',
    title: "연극 the cell 오디션 공고",
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-musical-2.jpg',
    title: "물랑루즈 오디션 공고",

  },
  {
    imageUrl: '/images/auditionInfo/audition-info-theater-2.jpg',
    title: "연극 로스트 오디션 공고",
  },
  {
    imageUrl: '/images/audition/audition-theater-7.jpg',
    title: "연극 렛미인 오디션 공고",
  
  },
  {
    imageUrl: '/images/auditionInfo/audition-info-theater-5.jpg',
    title: "연극 분홍립스틱 오디션 공고",
  },

);

// 오디션
const auditionData = await Audition.create(
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-7.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <팬텀> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-11.jpg',
    title: '문화감각',
    description: '뮤지컬 <루카스> 오디션',
    infoId: auditionInfo._id,
  },
  {
    image: '뮤지컬',
    imageUrl: '/images/auditionInfo/audition-info-musical-4.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <베르사유의 장미> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-8.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <웃는남자> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-12.jpg',
    title: '도깨비이엔티',
    description: '뮤지컬 <로보카 폴리> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-4.jpg',
    title: '바다컴퍼니',
    description: '연극 <너에게로 가는 길> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-9.jpg',
    title: '신시컴퍼니',
    description: '뮤지컬 <빌리엘리어트> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-5.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <한복 입은 남자> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-6.jpg',
    title: 'EMK MUSIAL COMPANY',
    description: '뮤지컬 <마타하리> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-6.jpg',
    title: '서울문화재단',
    description: '연극 <베를리너> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-1.jpg',
    title: 'CJ MUSICAL',
    description: '뮤지컬 브로드웨이 42번가 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-1.jpg',
    title: '예술의 전당',
    description: '연극 <햄릿> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-10.jpg',
    title: '에이콤',
    description: '뮤지컬 <명성황후> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-3.jpg',
    title: 'comporama',
    description: '연극<THE CELL> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "뮤지컬",
    imageUrl: '/images/audition/audition-musical-2.jpg',
    title: 'CJ MUSICAL',
    description: '뮤지컬 <물랑루즈> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-2.jpg',
    title: '(주)나인진엔터테인먼트',
    description: '연극 <로스트> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-7.jpg',
    title: '신시컴퍼니',
    description: '연극 <렛미인> 오디션',
    infoId: auditionInfo._id,
  },
  {
    category: "연극",
    imageUrl: '/images/audition/audition-theater-5.jpg',
    title: '(주)문컴퍼니',
    description: '연극 <분홍립스틱> 오디션',
    infoId: auditionInfo._id,
  },
)


await AuditionInfo.findByIdAndUpdate(auditionInfo._id, { auditionId: audition._id });