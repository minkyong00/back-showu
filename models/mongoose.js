import connect from '../connect/connect.js'; 
import Option from './shop/optionSchema.js'
import Md from './shop/mdSchema.js';
import Auction from './shop/auctionSchema.js'
import Community from "./community/communitySchema.js"
import VodShowuVideo from "./vod/vodShowuVideo.js"
import ShowuVideo from './vod/showuVideoSchema.js';
import Space from './reservation/spaceSchema.js'
import Show from './reservation/showSchema.js'
import Lesson from './showu/lessonSchema.js'
import Team from './showu/teamSchema.js'
import Like from './reservation/likeSchema.js';
import Reservation from './reservation/reservationSchema.js';
import { format, addDays } from "date-fns";
import mongoose from 'mongoose';
import LessonResevation from './showu/lessonReservationSchema.js';
import News from './community/newsSchema.js';
import Audition from './community/auditionSchema.js';
import NewsInfo from './community/newsInfoSchema.js';
import MdCart from './shop/mdCartSchema.js';
import TicketEvent from './reservation/ticketEventSchema.js';
import AuditionInfo from './community/auditionInfoSchema.js';
import AuctionPayment from './shop/auctionPaymentSchema.js';
import MdPayment from './shop/mdPaymentSchema.js';

connect()

// await .deleteMany()

// const communityData = await Community.create(
//   {
//     UserId: "677630ae686ab95419a5a1dc",  // 더미 데이터용 아이디 회원 가입된 아이디로 강제 부여
//     Writefile: "-",
//     title: "타이틀1",
//     category: "뮤지컬",
//     description: "설명1",
//     content: "내용1",
//     imageUrl: "/images/community/musical-1.jpg",
//   },
//   {
//     UserId: "677630ae686ab95419a5a1dc",
//     Writefile: "-",
//     title: "타이틀2",
//     description: "설명2",
//     category: "공연",
//     content: "내용2",
//     imageUrl: "/images/community/show-1.jpg",
//   },
//   {
//     UserId: "677630ae686ab95419a5a1dc",
//     Writefile: "-",
//     title: "타이틀3",
//     description: "설명3",
//     content: "내용3",
//     category: "밴드",
//     imageUrl: "/images/community/band-1.jpg",
//   },
//   {
//     UserId: "677630ae686ab95419a5a1dc",
//     Writefile: "-",
//     title: "타이틀4",
//     description: "설명4",
//     content: "내용4",
//     category: "영화",
//     imageUrl: "/images/community/movie-1.jpg",
//   },
//   {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀5",
//       description: "설명5",
//       content: "내용5",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-2.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀6",
//       description: "설명6",
//       content: "내용6",
//       category: "연극",
//       imageUrl: "/images/community/theater-1.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀7",
//       description: "설명7",
//       content: "내용7",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-3.jpg"
//     },
//     {
//       UserId:"677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀8",
//       description: "설명8",
//       content: "내용8",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-4.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀9",
//       description: "설명9",
//       content: "내용9",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-5.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀10",
//       description: "설명",
//       content: "내용",
//       category: "연극",
//       imageUrl: "/images/community/theater-2.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀11",
//       description: "설명",
//       content: "내용",
//       category: "연극",
//       imageUrl: "/images/community/theater-3.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀12",
//       description: "설명",
//       content: "내용",
//       category: "영화",
//       imageUrl: "/images/community/movie-2.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀13",
//       description: "설명",
//       content : "내용",
//       category: "공연",
//       imageUrl: "/images/community/show-2.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀14",
//       description: "설명",
//       content: "내용",
//       category: "공연",
//       imageUrl: "/images/community/show-3.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀15",
//       description: "설명",
//       content: "내용",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-6.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀16",
//       description: "설명",
//       content: "내용",
//       category: "영화",
//       imageUrl: "/images/community/movie-3.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀17",
//       description: "설명",
//       content: "내용",
//       category: "밴드",
//       imageUrl: "/images/community/band-2.jpg"
//     },
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀18",
//       description: "설명",
//       content: "내용",
//       category: "공연",
//       imageUrl: "/images/community/show-4.jpg"
//     },
    
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀19",
//       description: "설명",
//       content: "내용",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-7.jpg"
//     },    
//     {
//       UserId: "677630ae686ab95419a5a1dc",
//       Writefile: "-",
//       title: "타이틀20",
//       description: "설명",
//       content: "내용",
//       category: "뮤지컬",
//       imageUrl: "/images/community/musical-8.jpg"
//     },  
//   )


// 뉴스 메인
// const newsData = await News.create(
//   {
//     title: "CJ 뮤지컬의 대표작 물랑루즈",
//     category: "뮤지컬",
//     description: "주크박스 뮤지컬의 대명사 물랑루즈의 세계로!",
//     imageUrl: "/images/news/musical-10.jpg",
//   },
//   {
//     title: "뮤지컬 베르테르",
//     category: "뮤지컬",
//     description: "뮤지컬 베르테르",
//     imageUrl: "/images/news/musical-1.jpg",
//   },
//   {
//     title: "영화 위키드 PART1.",
//     category: "영화",
//     description: "위키드가 영화로!",
//     imageUrl: "/images/news/movie-1.jpg",
//   },
//   {
//     title: "데이식스 고척콘",
//     category: "밴드",
//     description: "데!이!식!스!웰!컴!투더!쇼!",
//     imageUrl: "/images/news/band-1.jpg",
//   },
//   {
//     title: "뮤지컬 시라노",
//     category: "뮤지컬",
//     description: "로맨티스트 시라노 아아,,",
//     imageUrl: "/images/news/musical-2.jpg",
//   },
//   {
//     title: "우리 별",
//     category: "연극",
//     description: "연극 우리 별",
//     imageUrl: "/images/news/theater-1.jpg",
//   },
//   {
//     title: "시네마 천국",
//     category: "영화",
//     description: "울고 싶을 땐 시네마 천국",
//     imageUrl: "/images/news/movie-2.jpg",
//   },
//   {
//     title: "딥 퍼플 역시 레전드 밴드",
//     category: "밴드",
//     description: "burn!!!!!",
//     imageUrl: "/images/news/band-2.jpg",
//   },
//   {
//     title: "해리포터와 마법사의 돌",
//     category: "영화",
//     description: "해리포터 시리즈의 시작",
//     imageUrl: "/images/news/movie-3.jpg",
//   },
//   {
//     title: "뮤지컬 킹키 부츠",
//     category: "뮤지컬",
//     description: "킹키하라!",
//     imageUrl: "/images/news/musical-3.jpg",
//   },
//   {
//     title: "하울의 움직이는 성",
//     category: "영화",
//     description: "지브리 하면 떠오르는 영화!",
//     imageUrl: "/images/news/movie-4.jpg",
  
//   },
//   {
//     title: "스미노 하야토 피아노 리사이틀",
//     category: "공연",
//     description: "피아노 연주회",
//     imageUrl: "/images/news/show-1.jpg" ,
//   },
//   {
//     title: "밴드 데이식스",
//     category: "밴드",
//     description: "걷잡을 수 없이 스르륵 녹아내려요",
//     imageUrl: "/images/news/band-3.jpg",
//   },
//   {
//     title: "뮤지컬 데스노트",
//     category: "뮤지컬",
//     description: "DEATH NOTE",
//     imageUrl: "/images/news/musical-4.jpg" ,
//   },
//   {
//     title: "뮤지컬 웨스트 사이드 스토리",
//     category: "뮤지컬",
//     description: "싸워라!(짝) 싸워라!(짝)",
//     imageUrl: "/images/news/musical-5.jpg",
//   },
//   {
//     title: "뮤지컬 종의 기원",
//     category: "뮤지컬",
//     description: "그 종의 기원 말고 재밌는 종의 기원",
//     imageUrl: "/images/news/musical-8.jpg",
//   },
//   {
//     title: "최고의 헤드윅은?",
//     category: "뮤지컬",
//     description: "셋 다 잘생겼는데 어떡하라고, 오또카라고, 어뜨카라고...",
//     imageUrl: "/images/news/musical-6.jpg",
//   },
//   {
//     title: "지크수가 또!",
//     category: "뮤지컬",
//     description: "Jesus..!",
//     imageUrl: "/images/news/musical-7.jpg",
//   },
//   {
//     title: "빛과 소리",
//     category: "공연",
//     description: "빛과 소리",
//     imageUrl: "/images/news/show-3.jpg",
//   },
//   {
//     title: "연극 곰스크로 가는 기차",
//     category: "연극",
//     description: "곰스크로 가는 기차",
//     imageUrl: "/images/news/theater-2.jpg",
//   },)
  


 //   뉴스 인포
// const newsInfoData = await NewsInfo.create(

//   {
//     title: "CJ 뮤지컬의 대표작 물랑루즈",
//     imageUrl: "/images/news/musical-10.jpg",
//     content: `막이 오르는 순간, 위대한 사랑이 시작된다! 1899년 파리, 
//               ‘물랑루즈’에서 벌어지는 거부할 수 없는 운명과 위대한 사랑 이야기.`
//   },
//   {
//     title: "뮤지컬 베르테르",
//     imageUrl: "/images/news/musical-1.jpg",
//     content: "그대는 어쩌면 그렇게 해맑을 수 있는지",
//   },
//   {
//     title: "영화 위키드 PART1.",
//     imageUrl: "/images/news/movie-1.jpg",
//     content: "영화 위키드 PART1.",
//   },
//   {
//     title: "데이식스 아이돌 밴드 최초로 고척돔에서 콘서트 열다!",
//     imageUrl: "/images/news/band-1.jpg",
//     content: "데이식스가 무려 고척돔에서 콘서트를 진행한다. 예매창은 터졌고, 5분만에 전석 매진되었다. 이것이 데이식스다!",
//   },
//   {
//     title: "뮤지컬 시라노",
//     imageUrl: "/images/news/musical-2.jpg",
//     content: "시라노로 시작해서 시라노로 끝나는 시라노의 이야기",
//   },
//   {
//     title: "연극 우리 별",
//     imageUrl: "/images/news/theater-1.jpg",
//     content: ".",
//   },
//   {
//     title: "울고 싶을 땐 시네마 천국",
//     imageUrl: "/images/news/movie-2.jpg",
//     content: ".",
//   },
//   {
//     title: "딥 퍼플 역시 레전드 밴드",
//     imageUrl: "/images/news/band-2.jpg",
//     content: ".",
//   },
//   {
//     title: "윙-가르디움- 레비오우-사, 낫 레비오사-아",
//     imageUrl: "/images/news/movie-3.jpg",
//     content: ".",
//   },
//   {
//     title: "네가 힘들 때, 곁에 있을게!",
//     imageUrl: "/images/news/musical-3.jpg",
//     content: ".",
//   },
//   {
//     title: "인생은 돌고 도는 것",
//     imageUrl: "/images/news/movie-4.jpg",
//     content: ".",
//   },
//   {
//     title: "스미노 하야토 피아노 리사이틀",
//     imageUrl: "/images/news/show-1.jpg",
//     content: ".",
//   },
//   {
//     title: "데이식스, welcome to the show",
//     imageUrl: "/images/news/band-3.jpg",
//     content: ".",
//   },
//   {
//     title: "뮤지컬 데스노트",
//     imageUrl: "/images/news/musical-4.jpg",
//     content: ".",
//   },
//   {
//     title: "제트파 vs 샤크파",
//     imageUrl: "/images/news/musical-5.jpg",
//     content: ".",
//   },
//   {
//     title: "유진아..",
//     imageUrl: "/images/news/musical-8.jpg",
//     content: ".",
//   },
//   {
//     title: "최고의 헤드윅은?",
//     imageUrl: "/images/news/news-info-1.jpg",
//     content: "아, 조정석 예쁘다.",
//   },
//   {
//     title: "지크수",
//     imageUrl: "/images/news/musical-7.jpg",
//     content: "See how I die!!!!",
//   },
//   {
//     title: "light & sound,,",
//     imageUrl: "/images/news/show-3.jpg",
//     content: ".",
//   },
//   {
//     title: "가즈아 곰스크로",
//     imageUrl: "/images/news/theater-2.jpg",
//     content: ".",
//   },
// );



// 오디션
// const auditionData = await Audition.create(
//   {
//     category: "뮤지컬",
//     imageUrl: '/images/audition/audition-musical-7.jpg',
//     title: 'EMK MUSIAL COMPANY',
//     description: '뮤지컬 <팬텀> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     imageUrl: '/images/audition/audition-musical-11.jpg',
//     title: '문화감각',
//     description: '뮤지컬 <루카스> 오디션',
//   },
//   {
//     category: '뮤지컬',
//     imageUrl: '/images/auditionInfo/audition-info-musical-4.jpg',
//     title: 'EMK MUSIAL COMPANY',
//     description: '뮤지컬 <베르사유의 장미> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     imageUrl: '/images/audition/audition-musical-8.jpg',
//     title: 'EMK MUSIAL COMPANY',
//     description: '뮤지컬 <웃는남자> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     imageUrl: '/images/audition/audition-musical-12.jpg',
//     title: '도깨비이엔티',
//     description: '뮤지컬 <로보카 폴리> 오디션',
//   },
//   {
//     category: "연극",
//     imageUrl: '/images/audition/audition-theater-4.jpg',
//     title: '바다컴퍼니',
//     description: '연극 <너에게로 가는 길> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     imageUrl: '/images/audition/audition-musical-9.jpg',
//     title: '신시컴퍼니',
//     description: '뮤지컬 <빌리엘리어트> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     imageUrl: '/images/audition/audition-musical-5.jpg',
//     title: 'EMK MUSIAL COMPANY',
//     description: '뮤지컬 <한복 입은 남자> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     imageUrl: '/images/audition/audition-musical-6.jpg',
//     title: 'EMK MUSIAL COMPANY',
//     description: '뮤지컬 <마타하리> 오디션',
//   },
//   {
//     category: "연극",
//     imageUrl: '/images/audition/audition-theater-6.jpg',
//     title: '서울문화재단',
//     description: '연극 <베를리너> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     imageUrl: '/images/audition/audition-musical-1.jpg',
//     title: 'CJ MUSICAL',
//     description: '뮤지컬 브로드웨이 42번가 오디션',
//   },
//   {
//     category: "연극",
//     imageUrl: '/images/audition/audition-theater-1.jpg',
//     title: '예술의 전당',
//     description: '연극 <햄릿> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     imageUrl: '/images/audition/audition-musical-10.jpg',
//     title: '에이콤',
//     description: '뮤지컬 <명성황후> 오디션',
//   },
//   {
//     category: "연극",
//     imageUrl: '/images/audition/audition-theater-3.jpg',
//     title: 'comporama',
//     description: '연극<THE CELL> 오디션',
//   },
//   {
//     category: "뮤지컬",
//     imageUrl: '/images/audition/audition-musical-2.jpg',
//     title: 'CJ MUSICAL',
//     description: '뮤지컬 <물랑루즈> 오디션',
//   },
//   {
//     category: "연극",
//     imageUrl: '/images/audition/audition-theater-2.jpg',
//     title: '(주)나인진엔터테인먼트',
//     description: '연극 <로스트> 오디션',
//   },
//   {
//     category: "연극",
//     imageUrl: '/images/audition/audition-theater-7.jpg',
//     title: '신시컴퍼니',
//     description: '연극 <렛미인> 오디션',
//   },
//   {
//     category: "연극",
//     imageUrl: '/images/audition/audition-theater-5.jpg',
//     title: '(주)문컴퍼니',
//     description: '연극 <분홍립스틱> 오디션',
//   },
// )



// 오디션 인포
// const auditionInfoData = await AuditionInfo.create(
//   {
//     imageUrl: '/images/auditionInfo/audition-info-musical-7.jpg',
//     title: "뮤지컬 팬텀 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-musical-11.jpg',
//     title: "뮤지컬 루카스 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-musical-4.jpg',
//     title: "뮤지컬 베르사유의 장미 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-musical-8.jpg',
//     title: "뮤지컬 웃는남자 오디션",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-musical-12.jpg',
//     title: "뮤지컬 로보카 폴리 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-theater-4.jpg',
//     title: "연극 너에게로 가는 길 오디션 공고",
//   },
//   {
//     imageUrl: '/images/audition/audition-musical-9.jpg',
//     title: "뮤지컬 빌리엘리어트 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-musical-5.jpg',
//     title: "뮤지컬 한복 입은 남자 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-musical-6.jpg',
//     title: "뮤지컬 마타하리 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-theater-6.jpg',
//     title: "연극 베를리너 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-musical-1.jpg',
//     title: "브로드웨이 42번가 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-theater-1.jpg',
//     title: "연극 햄릿 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-musical-10.jpg',
//     title: "뮤지컬 명성황후 아역 오디션 공고",
//   },
//   {
//     imageUrl: '/images/audition/audition-musical-3.jpg',
//     title: "연극 the cell 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-musical-2.jpg',
//     title: "물랑루즈 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-theater-2.jpg',
//     title: "연극 로스트 오디션 공고",
//   },
//   {
//     imageUrl: '/images/audition/audition-theater-7.jpg',
//     title: "연극 렛미인 오디션 공고",
//   },
//   {
//     imageUrl: '/images/auditionInfo/audition-info-theater-5.jpg',
//     title: "연극 분홍립스틱 오디션 공고",
//   },
// )

// MD 옵션
// const basicOption = await Option.create(
//   {
//     optionName: "기본 옵션",
//     additionalPrice: 0 
//   });

// const specialOption = await Option.create(
//   { 
//     optionName: "기본 옵션 + 증정",
//     additionalPrice: 3000 
//   });



// MD 상품
// const mdData = await Md.create(
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 프로그램북 스페셜 에디션", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 15000, 
//     image: "/images/shop/md/md1.jpg", 
//     imageDetail: "/images/shop/md/md1-1.jpg", 
//     isHearted : "677630ae686ab95419a5a1dc" 
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 금속 마그넷",
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],  
//     price: 13000, 
//     image: "/images/shop/md/md2.jpg", 
//     imageDetail: "/images/shop/md/md2-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 고블렛", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 18000, 
//     image: "/images/shop/md/md3.jpg", 
//     imageDetail: "/images/shop/md/md3-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 키링", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 17000, 
//     image: "/images/shop/md/md4.jpg", 
//     imageDetail: "/images/shop/md/md4-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 배지1", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 11000, 
//     image: "/images/shop/md/md5.jpg", 
//     imageDetail: "/images/shop/md/md5-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 배지2", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 11000, 
//     image: "/images/shop/md/md6.jpg", 
//     imageDetail: "/images/shop/md/md6-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 프로그램북 스페셜 에디션", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],
//     price: 11000, 
//     image: "/images/shop/md/md7.jpg", 
//     imageDetail: "/images/shop/md/md7-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 스트랩 파우치", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 18000, 
//     image: "/images/shop/md/md8.jpg", 
//     imageDetail: "/images/shop/md/md8-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "2025 캘린더", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000,  
//     image: "/images/shop/md/md9.jpg", 
//     imageDetail: "/images/shop/md/md9-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 금속 마그넷", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 14000, 
//     image: "/images/shop/md/md10.jpg", 
//     imageDetail: "/images/shop/md/md10-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 배지1", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000, 
//     image: "/images/shop/md/md11.jpg", 
//     imageDetail: "/images/shop/md/md11-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 배지2", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],
//     price: 12000,  
//     image: "/images/shop/md/md12.jpg", 
//     imageDetail: "/images/shop/md/md12-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 배지3", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000,  
//     image: "/images/shop/md/md13.jpg", 
//     imageDetail: "/images/shop/md/md13-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 에코백", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 13000, 
//     image: "/images/shop/md/md14.jpg", 
//     imageDetail: "/images/shop/md/md14-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 메시지 엽서", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 10000, 
//     image: "/images/shop/md/md15.jpg", 
//     imageDetail: "/images/shop/md/md15-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 유리컵", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000,  
//     image: "/images/shop/md/md16.jpg", 
//     imageDetail: "/images/shop/md/md16-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 대본집", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 13000,  
//     image: "/images/shop/md/md17.jpg", 
//     imageDetail: "/images/shop/md/md17-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 프로그램북", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000, 
//     image: "/images/shop/md/md18.jpg", 
//     imageDetail: "/images/shop/md/md18-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 거울 그립톡", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 13000, 
//     image: "/images/shop/md/md19.jpg", 
//     imageDetail: "/images/shop/md/md19-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 마스킹 테이프", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 6000,  
//     image: "/images/shop/md/md20.jpg", 
//     imageDetail: "/images/shop/md/md20-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 글리터 코스터", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 17000,  
//     image: "/images/shop/md/md21.jpg", 
//     imageDetail: "/images/shop/md/md21-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 미니 티켓북", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 18000,  
//     image: "/images/shop/md/md22.jpg", 
//     imageDetail: "/images/shop/md/md22-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 금속 북마크", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 9000, 
//     image: "/images/shop/md/md23.jpg", 
//     imageDetail: "/images/shop/md/md23-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 접이식 우산", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 27000, 
//     image: "/images/shop/md/md24.jpg", 
//     imageDetail: "/images/shop/md/md24-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 엽서 (고은성VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 5000,  
//     image: "/images/shop/md/md25.jpg", 
//     imageDetail: "/images/shop/md/md25-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 엽서 (이해준VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 5000,  
//     image: "/images/shop/md/md26.jpg", 
//     imageDetail: "/images/shop/md/md26-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 엽서 (카이VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 5000,  
//     image: "/images/shop/md/md27.jpg", 
//     imageDetail: "/images/shop/md/md27-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (고은성VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000,  
//     image: "/images/shop/md/md28.jpg", 
//     imageDetail: "/images/shop/md/md28-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (이해준VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000, 
//     image: "/images/shop/md/md29.jpg", 
//     imageDetail: "/images/shop/md/md29-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (카이VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000, 
//     image: "/images/shop/md/md30.jpg", 
//     imageDetail: "/images/shop/md/md30-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
// )


// MD 장바구니
// const mdCartData = await MdCart.create(
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 프로그램북 스페셜 에디션", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 15000, 
//     image: "/images/shop/md/md1.jpg", 
//     imageDetail: "/images/shop/md/md1-1.jpg", 
//     isHearted : "677630ae686ab95419a5a1dc" 
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 금속 마그넷",
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],  
//     price: 13000, 
//     image: "/images/shop/md/md2.jpg", 
//     imageDetail: "/images/shop/md/md2-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 고블렛", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 18000, 
//     image: "/images/shop/md/md3.jpg", 
//     imageDetail: "/images/shop/md/md3-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 키링", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 17000, 
//     image: "/images/shop/md/md4.jpg", 
//     imageDetail: "/images/shop/md/md4-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 배지1", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 11000, 
//     image: "/images/shop/md/md5.jpg", 
//     imageDetail: "/images/shop/md/md5-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 배지2", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 11000, 
//     image: "/images/shop/md/md6.jpg", 
//     imageDetail: "/images/shop/md/md6-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 프로그램북 스페셜 에디션", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],
//     price: 11000, 
//     image: "/images/shop/md/md7.jpg", 
//     imageDetail: "/images/shop/md/md7-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "베르사유의 장미 스트랩 파우치", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 18000, 
//     image: "/images/shop/md/md8.jpg", 
//     imageDetail: "/images/shop/md/md8-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "연극", 
//     mdName: "2025 캘린더", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000,  
//     image: "/images/shop/md/md9.jpg", 
//     imageDetail: "/images/shop/md/md9-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 금속 마그넷", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 14000, 
//     image: "/images/shop/md/md10.jpg", 
//     imageDetail: "/images/shop/md/md10-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 배지1", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000, 
//     image: "/images/shop/md/md11.jpg", 
//     imageDetail: "/images/shop/md/md11-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 배지2", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"],
//     price: 12000,  
//     image: "/images/shop/md/md12.jpg", 
//     imageDetail: "/images/shop/md/md12-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 배지3", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000,  
//     image: "/images/shop/md/md13.jpg", 
//     imageDetail: "/images/shop/md/md13-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 에코백", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 13000, 
//     image: "/images/shop/md/md14.jpg", 
//     imageDetail: "/images/shop/md/md14-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 메시지 엽서", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 10000, 
//     image: "/images/shop/md/md15.jpg", 
//     imageDetail: "/images/shop/md/md15-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 유리컵", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000,  
//     image: "/images/shop/md/md16.jpg", 
//     imageDetail: "/images/shop/md/md16-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 대본집", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 13000,  
//     image: "/images/shop/md/md17.jpg", 
//     imageDetail: "/images/shop/md/md17-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "영화", 
//     mdName: "4월은 너의 거짓말 프로그램북", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 12000, 
//     image: "/images/shop/md/md18.jpg", 
//     imageDetail: "/images/shop/md/md18-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 거울 그립톡", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 13000, 
//     image: "/images/shop/md/md19.jpg", 
//     imageDetail: "/images/shop/md/md19-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 마스킹 테이프", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 6000,  
//     image: "/images/shop/md/md20.jpg", 
//     imageDetail: "/images/shop/md/md20-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 글리터 코스터", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 17000,  
//     image: "/images/shop/md/md21.jpg", 
//     imageDetail: "/images/shop/md/md21-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 미니 티켓북", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 18000,  
//     image: "/images/shop/md/md22.jpg", 
//     imageDetail: "/images/shop/md/md22-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 금속 북마크", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 9000, 
//     image: "/images/shop/md/md23.jpg", 
//     imageDetail: "/images/shop/md/md23-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 접이식 우산", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 27000, 
//     image: "/images/shop/md/md24.jpg", 
//     imageDetail: "/images/shop/md/md24-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 엽서 (고은성VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 5000,  
//     image: "/images/shop/md/md25.jpg", 
//     imageDetail: "/images/shop/md/md25-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 엽서 (이해준VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 5000,  
//     image: "/images/shop/md/md26.jpg", 
//     imageDetail: "/images/shop/md/md26-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 엽서 (카이VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 5000,  
//     image: "/images/shop/md/md27.jpg", 
//     imageDetail: "/images/shop/md/md27-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (고은성VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000,  
//     image: "/images/shop/md/md28.jpg", 
//     imageDetail: "/images/shop/md/md28-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (이해준VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000, 
//     image: "/images/shop/md/md29.jpg", 
//     imageDetail: "/images/shop/md/md29-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
//   { 
//     UserId: "677630ae686ab95419a5a1dc",
//     category: "뮤지컬", 
//     mdName: "프랑켄슈타인 앙리 렌티큘러 포스터 (카이VER.)", 
//     options: ["6776a5c36cfb2b1f9ef110f5", "6776a5c36cfb2b1f9ef110f7"], 
//     price: 19000, 
//     image: "/images/shop/md/md30.jpg", 
//     imageDetail: "/images/shop/md/md30-1.jpg", 
//     isHearted: "677630ae686ab95419a5a1dc"  
//   },
// )


// 경매 상품
// const auctionData = await Auction.create(
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 프로그램북 스페셜 에디션",
//     auctionId: "111ABC",
//     time: "2일 11시간 23분",
//     count: 60,
//     unit: 1000,
//     bid: 100000,
//     finalPrice: 100000,
//     description: "상세 설명1",
//     image: "/images/shop/auction/auction1.jpg",
//     imageDetail: "/images/shop/auction/auction1-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 금속 마그넷",
//     auctionId: "112ABC",
//     time: "2시간 06분",
//     count: 88,
//     unit: 1000,
//     bid: 160000,
//     finalPrice: 160000,
//     description: "상세 설명2",
//     image: "/images/shop/auction/auction2.jpg",
//     imageDetail: "/images/shop/auction/auction2-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   {
//     category: "연극",
//     auctionName: "베르사유의 장미 고블렛",
//     auctionId: "113ABC",
//     time: "5일 4시간 47분",
//     count: 23,
//     unit: 1000,
//     bid: 200000,
//     finalPrice: 200000,
//     description: "상세 설명3",
//     image: "/images/shop/auction/auction3.jpg",
//     imageDetail: "/images/shop/auction/auction3-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 키링",
//     auctionId: "114ABC",
//     time: '4일 8시간 12분',
//     count: 10,
//     unit: 1000,
//     bid: 50000,
//     finalPrice: 50000,
//     description: "상세 설명4",
//     image: "/images/shop/auction/auction4.jpg",
//     imageDetail: "/images/shop/auction/auction4-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 배지1",
//     auctionId: "115ABC",
//     time: "11시간 03분",
//     count: 88,
//     unit: 1000,
//     bid: 75000,
//     finalPrice: 75000,
//     description: "상세 설명5",
//     image: "/images/shop/auction/auction5.jpg",
//     imageDetail: "/images/shop/auction/auction5-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 배지2",
//     auctionId: "116ABC",
//     time: "15시간 08분",
//     count: 21,
//     unit: 1000,
//     bid: 92000,
//     finalPrice: 92000,
//     description: "상세 설명6",
//     image: "/images/shop/auction/auction6.jpg",
//     imageDetail: "/images/shop/auction/auction6-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 배지3",
//     auctionId: "117ABC",
//     time: "3일 6시간 49분",
//     count: 45,
//     unit: 1000,
//     bid: 89000,
//     finalPrice: 89000,
//     description: "상세 설명7",
//     image: "/images/shop/auction/auction7.jpg",
//     imageDetail: "/images/shop/auction/auction7-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "베르사유의 장미 스트랩 파우치",
//     auctionId: "118ABC",
//     time: "4시간 13시간 07분",
//     count: 67,
//     unit: 1000,
//     bid: 190000,
//     finalPrice: 190000,
//     description: "상세 설명8",
//     image: "/images/shop/auction/auction8.jpg",
//     imageDetail: "/images/shop/auction/auction8-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "연극",
//     auctionName: "2025 캘린더",
//     auctionId: "119ABC",
//     time: "22일 8시간 17분",
//     count: 13,
//     unit: 1000,
//     bid: 200000,
//     finalPrice: 200000,
//     description: "상세 설명9",
//     image: "/images/shop/auction/auction9.jpg",
//     imageDetail: "/images/shop/auction/auction9-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 금속 마그넷",
//     auctionId: "120ABC",
//     time: "17일 3시간 28분",
//     count: 78,
//     unit: 1000,
//     bid: 165000,
//     finalPrice: 165000,
//     description: "상세 설명10",
//     image: "/images/shop/auction/auction10.jpg",
//     imageDetail: "/images/shop/auction/auction10-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 배지1",
//     auctionId: "121ABC",
//     time: "23시간 05분",
//     count: 23,
//     unit: 1000,
//     bid: 84000,
//     finalPrice: 84000,
//     description: "상세 설명11",
//     image: "/images/shop/auction/auction11.jpg",
//     imageDetail: "/images/shop/auction/auction11-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 배지2",
//     auctionId: "123ABC",
//     time: "4일 7시간 45분",
//     count: 78,
//     unit: 1000,
//     bid: 90000,
//     finalPrice: 90000,
//     description: "상세 설명12",
//     image: "/images/shop/auction/auction12.jpg",
//     imageDetail: "/images/shop/auction/auction12-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 배지3",
//     auctionId: "124ABC",
//     time: "5일 7시간 39분",
//     count: 90,
//     unit: 1000,
//     bid: 110000,
//     finalPrice: 110000,
//     description: "상세 설명13",
//     image: "/images/shop/auction/auction13.jpg",
//     imageDetail: "/images/shop/auction/auction13-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 에코백",
//     auctionId: "125ABC",
//     time: "8일 1시간 03분",
//     count: 99,
//     unit: 1000,
//     bid: 120000,
//     finalPrice: 120000,
//     description: "상세 설명14",
//     image: "/images/shop/auction/auction14.jpg",
//     imageDetail: "/images/shop/auction/auction14-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 메시지 엽서",
//     auctionId: "126ABC",
//     time: "9일 23시간 11분",
//     count: 102,
//     unit: 1000,
//     bid: 210000,
//     finalPrice: 210000,
//     description: "상세 설명15",
//     image: "/images/shop/auction/auction15.jpg",
//     imageDetail: "/images/shop/auction/auction15-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 유리컵",
//     auctionId: "127ABC",
//     time: "4일 16시간 07분",
//     count: 45,
//     unit: 1000,
//     bid: 35000,
//     finalPrice: 35000,
//     description: "상세 설명16",
//     image: "/images/shop/auction/auction16.jpg",
//     imageDetail: "/images/shop/auction/auction16-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 대본집",
//     auctionId: "128ABC",
//     time: "14일 7시간 03분",
//     count: 27,
//     unit: 1000,
//     bid: 113000,
//     finalPrice: 113000,
//     description: "상세 설명17",
//     image: "/images/shop/auction/auction17.jpg",
//     imageDetail: "/images/shop/auction/auction17-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "영화",
//     auctionName: "4월은 너의 거짓말 프로그램북",
//     auctionId: "129ABC",
//     time: "20시간 03분",
//     count: 67,
//     unit: 1000,
//     bid: 145000,
//     finalPrice: 145000,
//     description: "상세 설명18",
//     image: "/images/shop/auction/auction18.jpg",
//     imageDetail: "/images/shop/auction/auction18-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 거울 그립톡",
//     auctionId: "130ABC",
//     time: "7일 1시간 45분",
//     count: 89,
//     unit: 1000,
//     bid: 73000,
//     finalPrice: 73000,
//     description: "상세 설명19",
//     image: "/images/shop/auction/auction19.jpg",
//     imageDetail: "/images/shop/auction/auction19-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 마스킹 테이프",
//     auctionId: "131ABC",
//     time: "19일 18시간 23분",
//     count: 58,
//     unit: 1000,
//     bid: 23000,
//     finalPrice: 23000,
//     description: "상세 설명20",
//     image: "/images/shop/auction/auction20.jpg",
//     imageDetail: "/images/shop/auction/auction20-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 글리터 코스터",
//     auctionId: "132ABC",
//     time: "7시간 57분",
//     count: 10,
//     unit: 1000,
//     bid: 50000,
//     finalPrice: 50000,
//     description: "상세 설명21",
//     image: "/images/shop/auction/auction21.jpg",
//     imageDetail: "/images/shop/auction/auction21-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 미니 티켓북",
//     auctionId: "133ABC",
//     time: "2시간 08분",
//     count: 23,
//     unit: 1000,
//     bid: 84000,
//     finalPrice: 84000,
//     description: "상세 설명22",
//     image: "/images/shop/auction/auction22.jpg",
//     imageDetail: "/images/shop/auction/auction22-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 금속 북마크",
//     auctionId: "134ABC",
//     time: "56분",
//     count: 121,
//     unit: 1000,
//     bid: 225000,
//     finalPrice: 225000,
//     description: "상세 설명23",
//     image: "/images/shop/auction/auction23.jpg",
//     imageDetail: "/images/shop/auction/auction23-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 접이식 우산",
//     auctionId: "135ABC",
//     time: "29일 3시간 56분",
//     count: 21,
//     unit: 1000,
//     bid: 167000,
//     finalPrice: 167000,
//     description: "상세 설명24",
//     image: "/images/shop/auction/auction24.jpg",
//     imageDetail: "/images/shop/auction/auction24-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 엽서 (고은성VER.)",
//     auctionId: "136ABC",
//     time: "12일 21시간 12분",
//     count: 12,
//     unit: 1000,
//     bid: 30000,
//     finalPrice: 30000,
//     description: "상세 설명25",
//     image: "/images/shop/auction/auction25.jpg",
//     imageDetail: "/images/shop/auction/auction25-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 엽서 (이해준VER.)",
//     auctionId: "137ABC",
//     time: "1일 3시간 56분",
//     count: 14,
//     unit: 1000,
//     bid: 16000,
//     finalPrice: 16000,
//     description: "상세 설명26",
//     image: "/images/shop/auction/auction26.jpg",
//     imageDetail: "/images/shop/auction/auction26-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 엽서 (카이VER.)",
//     auctionId: "138ABC",
//     time: "10일 19시간 46분",
//     count: 99,
//     unit: 1000,
//     bid: 155000,
//     finalPrice: 155000,
//     description: "상세 설명27",
//     image: "/images/shop/auction/auction27.jpg",
//     imageDetail: "/images/shop/auction/auction27-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (고은성VER.)",
//     auctionId: "139ABC",
//     time: "2시간 13분",
//     count: 7,
//     unit: 1000,
//     bid: 23000,
//     finalPrice: 23000,
//     description: "상세 설명28",
//     image: "/images/shop/auction/auction28.jpg",
//     imageDetail: "/images/shop/auction/auction28-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (이해준VER.)",
//     auctionId: "140ABC",
//     time: "11시간 27분",
//     count: 11,
//     unit: 1000,
//     bid: 400000,
//     finalPrice: 400000,
//     description: "상세 설명29",
//     image: "/images/shop/auction/auction29.jpg",
//     imageDetail: "/images/shop/auction/auction29-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
//   { 
//     category: "뮤지컬",
//     auctionName: "프랑켄슈타인 앙리 렌티큘러 포스터 (카이VER.)",
//     auctionId: "218ABC",
//     time: "10시간 02분",
//     count: 9,
//     unit: 1000,
//     bid: 33000,
//     finalPrice: 33000,
//     description: "상세 설명30",
//     image: "/images/shop/auction/auction30.jpg",
//     imageDetail: "/images/shop/auction/auction30-1.jpg",
//     isHearted: "677630ae686ab95419a5a1dc"
//   },
// )

// // MD 결제
// const mdPaymentData = await MdPayment.create(
//   {
//     productName: "6776b9b005e67594800dd970",
//     price: 15000,
//     quantity: 1,
//     image: "/images/shop/md/md1-1.jpg",
//     name: "677630ae686ab95419a5a1dc",
//     address: "서울 강남구",
//     message: "배송 전에 미리 연락바랍니다.",
//     totalAmount: 18000,
//     deliveryFee: 3000,
//     discount: 0,
//     paymentMethod: "토스페이",
//     status: "주문완료",
//     paymentAt: "2025-01-15",
//   },
//   {
//     productName: "6776b9b005e67594800dd971",
//     price: 13000,
//     quantity: 1,
//     image: "/images/shop/md/md2-1.jpg",
//     name: "677630ae686ab95419a5a1dc",
//     address: "서울 강남구",
//     message: "부재 시 경비실에 맡겨주세요.",
//     totalAmount: 16000,
//     deliveryFee: 3000,
//     discount: 0,
//     paymentMethod: "토스페이",
//     status: "주문완료",
//     paymentAt: "2025-01-15",
//   },
//   {
//     productName: "6776b9b005e67594800dd972",
//     price: 18000,
//     quantity: 1,
//     image: "/images/shop/md/md3-1.jpg",
//     name: "677630ae686ab95419a5a1dc",
//     address: "서울 강남구",
//     message: "부재 시 문 앞에 놓아주세요.",
//     totalAmount: 21000,
//     deliveryFee: 3000,
//     discount: 0,
//     paymentMethod: "토스페이",
//     status: "주문완료",
//     paymentAt: "2025-01-15",
//   },
//   {
//     productName: "6776b9b005e67594800dd973",
//     price: 17000,
//     quantity: 1,
//     image: "/images/shop/md/md4-1.jpg",
//     name: "677630ae686ab95419a5a1dc",
//     address: "서울 강남구",
//     message: "빠른 배송 부탁드립니다.",
//     totalAmount: 20000,
//     deliveryFee: 3000,
//     discount: 0,
//     paymentMethod: "토스페이",
//     status: "주문완료",
//     paymentAt: "2025-01-15",
//   },
//   {
//     productName: "6776b9b005e67594800dd974",
//     price: 11000,
//     quantity: 1,
//     image: "/images/shop/md/md1-1.jpg",
//     name: "677630ae686ab95419a5a1dc",
//     address: "서울 강남구",
//     message: "택배함에 보관해 주세요.",
//     totalAmount: 14000,
//     deliveryFee: 3000,
//     discount: 0,
//     paymentMethod: "토스페이",
//     status: "주문완료",
//     paymentAt: "2025-01-15",
//   },
// )

// // 경매 결제
// const auctionPaymentData = await AuctionPayment.create(
//   {
//     productName: "678924d3168c64952ca49d13",
//     finalPrice: 100000,
//     quantity: 1,
//     image: "/images/shop/auction/auction1-1.jpg",
//     name: "677630ae686ab95419a5a1dc",
//     address: "서울 강남구",
//     message: "배송 전에 미리 연락바랍니다.",
//     totalAmount: 100000,
//     deliveryFee: 0,
//     discount: 0,
//     paymentMethod: "토스페이",
//     status: "주문완료",
//     paymentAt: "2025-01-15"
//   },
//   {
//     productName: "678924d3168c64952ca49d14",
//     finalPrice: 160000,
//     quantity: 1,
//     image: "/images/shop/auction/auction2-1.jpg",
//     name: "677630ae686ab95419a5a1dc",
//     address: "서울 강남구",
//     message: "부재 시 경비실에 맡겨주세요.",
//     totalAmount: 160000,
//     deliveryFee: 0,
//     discount: 0,
//     paymentMethod: "토스페이",
//     status: "주문완료",
//     paymentAt: "2025-01-15"
//   },
//   {
//     productName: "678924d3168c64952ca49d15",
//     finalPrice: 200000,
//     quantity: 1,
//     image: "/images/shop/auction/auction3-1.jpg",
//     name: "677630ae686ab95419a5a1dc",
//     address: "서울 강남구",
//     message: "부재 시 문 앞에 놓아주세요.",
//     totalAmount: 200000,
//     deliveryFee: 0,
//     discount: 0,
//     paymentMethod: "토스페이",
//     status: "주문완료",
//     paymentAt: "2025-01-15"
//   },
//   {
//     productName: "678924d3168c64952ca49d16",
//     finalPrice: 50000,
//     quantity: 1,
//     image: "/images/shop/auction/auction4-1.jpg",
//     name: "677630ae686ab95419a5a1dc",
//     address: "서울 강남구",
//     message: "빠른 배송 부탁드립니다.",
//     totalAmount: 53000,
//     deliveryFee: 3000,
//     discount: 0,
//     paymentMethod: "토스페이",
//     status: "주문완료",
//     paymentAt: "2025-01-15"
//   },
//   {
//     productName: "678924d3168c64952ca49d17",
//     finalPrice: 75000,
//     quantity: 1,
//     image: "/images/shop/auction/auction5-1.jpg",
//     name: "677630ae686ab95419a5a1dc",
//     address: "서울 강남구",
//     message: "택배함에 보관해 주세요.",
//     totalAmount: 75000,
//     deliveryFee: 0,
//     discount: 0,
//     paymentMethod: "토스페이",
//     status: "주문완료",
//     paymentAt: "2025-01-15"
//   },
// )


// const spaceData = await Space.create(
//   {
//     id: 1,
//     name: "Conference Room A",
//     location: "Building 1, Floor 3",
//     price: "100,000원",
//     pricePerHour: 100000,
//     pricePerDay: 800000,
//     img: "/images/reservation/space1.jpg",
//     descriptions: [
//       "면적 : 399.00 ㎡ ≒ 120.7 평",
//       "가로 : 21.00 m",
//       "세로 : 19.00 m",
//       "천정높이 : 5.50m",
//       "최대인원 : 172명",
//     ],
//     amenities: ["WiFi", "주차 공간", "프로젝터", "음향 시스템"],
//     icons: [
//       {
//         name: "냉방기",
//         icon: "/images/reservation/space1-6.svg",
//       },
//       {
//         name: "난방기",
//         icon: "/images/reservation/space1-7.svg",
//       },
//       {
//         name: "음향 시스템",
//         icon: "/images/reservation/space1-8.svg",
//       },
//       {
//         name: "프로젝터",
//         icon: "/images/reservation/space1-9.svg",
//       },
//     ],
//     additionalImages: [
//       "/images/reservation/space1-2.jpg",
//       "/images/reservation/space1-3.jpg",
//       "/images/reservation/space1-4.jpg",
//       "/images/reservation/space1-5.jpg",
//     ],
//   },
//   {
//     id: 2,
//     name: "Event Hall B",
//     location: "Building 2, Floor 1",
//     price: "200,000원",
//     pricePerHour: 200000,
//     pricePerDay: 1600000,
//     img: "/images/reservation/space2.jpg",
//     descriptions: [
//       "면적 : 399.00 ㎡ ≒ 120.7 평",
//       "가로 : 18.00 m",
//       "세로 : 16.00 m",
//       "천정높이 : 5.80m",
//       "최대인원 : 150명",
//     ],
//     amenities: ["Wi-Fi", "Sound System", "Stage"],
//     icons: [
//       {
//         name: "냉방기",
//         icon: "/images/reservation/space1-6.svg",
//       },
//       {
//         name: "난방기",
//         icon: "/images/reservation/space1-7.svg",
//       },
//       {
//         name: "음향 시스템",
//         icon: "/images/reservation/space1-8.svg",
//       },
//       {
//         name: "프로젝터",
//         icon: "/images/reservation/space1-9.svg",
//       },
//     ],
//     additionalImages: [
//       "/images/reservation/space2-2.jpg",
//       "/images/reservation/space2-3.jpg",
//       "/images/reservation/space2-4.jpg",
//       "/images/reservation/space2-5.jpg",
//     ],
//   },
// )


// const showData = await Show.create(
//   {
//     id: 1,
//     name: "뮤지컬 <시라노>",
//     venue: "디큐브 링크 아트센터",
//     dates: "2024.10.15 - 2025.1.5",
//     duration: "120분",
//     grade: "13세 이상",
//     price: {
//       R: "77,000원",
//       S: "130,000원",
//     },
//     type: "일반예매",
//     discounts: [
//       "PAYCO VIP 회원 할인 10% 할인",
//       "5차 조기예매 할인 25% 할인",
//       "마티네 공연 할인 30% 할인",
//       "재관람(1인1매, 본인 기준으로 티켓소지시) 25% 할인",
//       "S석 청소년할인(본인, 생년월일 증명서류 지참) 30% 할인",
//     ],
//     img: "/images/reservation/show1.gif",
//     detailImage: "/images/reservation/show1-1.jpg",
//     cast: [
//       {
//         name: "조형균",
//         img: "/images/reservation/show1-2.gif",
//       },
//       {
//         name: "최재림",
//         img: "/images/reservation/show1-3.gif",
//       },
//       {
//         name: "고은성",
//         img: "/images/reservation/show1-4.gif",
//       },
//       {
//         name: "나하나",
//         img: "/images/reservation/show1-5.gif",
//       },
//       {
//         name: "김수연",
//         img: "/images/reservation/show1-6.gif",
//       },
//       {
//         name: "이지수",
//         img: "/images/reservation/show1-7.gif",
//       },
//     ],
//   },
//   {
//     id: 2,
//     name: "뮤지컬 <웃는남자>",
//     venue: "세종문화회관 대극장",
//     dates: "2024.12.1 - 2025.2.28",
//     duration: "150분",
//     grade: "15세 이상",
//     price: {
//       R: "110,000원",
//       S: "170,000원",
//     },
//     type: "일반예매",
//     discounts: [
//       "showU 회원 할인 15% 할인",
//       "조기예매 할인 20% 할인",
//       "학생 할인 30% 할인",
//     ],
//     img: "/images/reservation/show2.gif",
//     detailImage: "/images/reservation/show2-1.jpg",
//     cast: [
//       {
//         name: "박은태",
//         img: "/images/reservation/show2-2.gif",
//       },
//       {
//         name: "이석훈",
//         img: "/images/reservation/show2-3.gif",
//       },
//       {
//         name: "규현",
//         img: "/images/reservation/show2-4.gif",
//       },
//       {
//         name: "도영",
//         img: "/images/reservation/show2-5.gif",
//       },
//       {
//         name: "서범석",
//         img: "/images/reservation/show2-6.jpg",
//       },
//       {
//         name: "민영기",
//         img: "/images/reservation/show2-7.jpg",
//       },
//     ],
//   },
// )

// 찜 - likeSchema.js
// const likeData = await Like.create(
//   {
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
//     spaceId: "6777b14b45bae57603a94a02", // 삽입된 Space ObjectId-1
//     showId: null,
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: "6777b14b45bae57603a94a03", // 삽입된 Space ObjectId-2
//     showId: null,
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: null,
//     showId: "6777b14b45bae57603a94a08", // 삽입된 Show ObjectId-1
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: null,
//     showId: "6777b14b45bae57603a94a0f", // 삽입된 Show ObjectId-2
//     createdAt: new Date().toISOString(),
//   },
// );

// 예약 - reservationSchema.js
// const now = new Date();
// const reservationData = await Reservation.create(
//   {
//     id: 1,
//     spaceId: "6777b14b45bae57603a94a02", // 삽입된 Space ObjectId-1
//     showId: null,
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 1), "yyyy-MM-dd"), // 1일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(10, 0)), "HH:mm:ss"), // 10:00 AM
//     totalAmount: 300000, // 예시 총 금액
//     discountsApplied: ["Early Bird Discount"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
//   {
//     id: 2,
//     spaceId: "6777b14b45bae57603a94a03", // 삽입된 Space ObjectId-2
//     showId: null,
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 2), "yyyy-MM-dd"), // 2일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(14, 0)), "HH:mm:ss"), // 2:00 PM
//     totalAmount: 450000, // 예시 총 금액
//     discountsApplied: ["Member Discount"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
//   {
//     id: 3,
//     spaceId: null,
//     showId: "6777b14b45bae57603a94a08", // 삽입된 Show ObjectId-1
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 3), "yyyy-MM-dd"), // 3일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(18, 0)), "HH:mm:ss"), // 6:00 PM
//     totalAmount: 80000, // 예시 총 금액
//     discountsApplied: ["Holiday Special"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
//   {
//     id: 4,
//     spaceId: null,
//     showId: "6777b14b45bae57603a94a0f", // 삽입된 Show ObjectId-2
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 4), "yyyy-MM-dd"), // 4일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(17, 0)), "HH:mm:ss"), // 5:00 PM
//     totalAmount: 95000, // 예시 총 금액
//     discountsApplied: ["Student Discount"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
// )

// const ticketEventData = await TicketEvent.create(
//   {
//     id: 1,
//     name: "2025 연극 <세일즈맨의 죽음>",
//     date: "2025-01-30",
//     type: "일반예매",
//     img: "/images/reservation/expect1.gif",
//   },
//   {
//     id: 2,
//     name: "뮤지컬 <썬데이>",
//     date: "2025-02-10",
//     type: "단독판매",
//     img: "/images/reservation/expect2.gif",
//   },
//   {
//     id: 3,
//     name: "뮤지컬 <탐정 케이>",
//     date: "2025-02-12",
//     type: "일반예매",
//     img: "/images/reservation/expect3.gif",
//   },
//   {
//     id: 4,
//     name: "뮤지컬 <어제의 시는 내일의 노래가 될 수 있을까>",
//     date: "2025-02-14",
//     type: "단독판매",
//     img: "/images/reservation/expect4.gif",
//   },
//   {
//     id: 5,
//     name: "뮤지컬 <어느 60대 노부부 이야기>",
//     date: "2025-02-16",
//     type: "일반예매",
//     img: "/images/reservation/expect5.gif",
//   },
//   {
//     id: 6,
//     name: "뮤지컬 <시카고>",
//     date: "2025-02-18",
//     type: "단독판매",
//     img: "/images/reservation/expect6.gif",
//   },
//   {
//     id: 7,
//     name: "블랙코미디 연극 <죽은시인의 사회>",
//     date: "2025-02-20",
//     type: "일반예매",
//     img: "/images/reservation/expect7.gif",
//   },
//   {
//     id: 8,
//     name: "좀비연극 <오마이갓>",
//     date: "2025-02-22",
//     type: "단독판매",
//     img: "/images/reservation/expect8.gif",
//   },
//   {
//     id: 9,
//     name: "연극 <너의 목소리가 들려>",
//     date: "2025-02-24",
//     type: "일반예매",
//     img: "/images/reservation/expect9.gif",
//   },
//   {
//     id: 10,
//     name: "웃음작렬연극 <런투패밀리>",
//     date: "2025-02-26",
//     type: "단독판매",
//     img: "/images/reservation/expect10.gif",
//   },
//   {
//     id: 11,
//     name: "연극 <쉬어매드니스>",
//     date: "2025-02-28",
//     type: "일반예매",
//     img: "/images/reservation/expect11.gif",
//   },
//   {
//     id: 12,
//     name: "연극 <테베랜드>",
//     date: "2025-03-02",
//     type: "단독판매",
//     img: "/images/reservation/expect12.gif",
//   },
//   {
//     id: 13,
//     name: "연극 <바닷마을 다이어리>",
//     date: "2025-03-04",
//     type: "일반예매",
//     img: "/images/reservation/expect13.gif",
//   },
//   {
//     id: 14,
//     name: "연극 <붉은 낙엽>",
//     date: "2025-03-06",
//     type: "단독판매",
//     img: "/images/reservation/expect14.gif",
//   },
//   {
//     id: 15,
//     name: "행오버",
//     date: "2025-03-08",
//     type: "일반예매",
//     img: "/images/reservation/expect15.gif",
//   },
//   {
//     id: 16,
//     name: "연극 애나엑스 <ANNA X>",
//     date: "2025-04-13",
//     type: "단독판매",
//     img: "/images/reservation/expect16.gif",
//   },
//   {
//     id: 17,
//     name: "연극 <꽃의 비밀>",
//     date: "2025-05-26",
//     type: "일반예매",
//     img: "/images/reservation/expect17.gif",
//   },
//   {
//     id: 18,
//     name: "연극 <타인의 삶>",
//     date: "2025-06-12",
//     type: "단독판매",
//     img: "/images/reservation/expect18.gif",
//   },
//   {
//     id: 19,
//     name: "연극 <시나브로>",
//     date: "2025-06-20",
//     type: "일반예매",
//     img: "/images/reservation/expect19.gif",
//   },
//   {
//     id: 20,
//     name: "연극 <모비딕>",
//     date: "2025-07-19",
//     type: "단독판매",
//     img: "/images/reservation/expect20.gif",
//   },
//   {
//     id: 21,
//     name: "뮤직드라마 <불편한 편의점>",
//     date: "2025-08-16",
//     type: "일반예매",
//     img: "/images/reservation/expect21.gif",
//   },
//   {
//     id: 22,
//     name: "연극 <마음>",
//     date: "2025-09-04",
//     type: "단독판매",
//     img: "/images/reservation/expect22.gif",
//   },
//   {
//     id: 23,
//     name: "연극 <벚꽃동산>",
//     date: "2025-10-15",
//     type: "일반예매",
//     img: "/images/reservation/expect23.gif",
//   },
//   {
//     id: 24,
//     name: "연극 <비누향기>",
//     date: "2025-10-21",
//     type: "단독판매",
//     img: "/images/reservation/expect24.gif",
//   },
//   {
//     id: 25,
//     name: "뮤지컬 <그해 여름>",
//     date: "2025-11-12",
//     type: "일반예매",
//     img: "/images/reservation/expect25.gif",
//   },
//   {
//     id: 26,
//     name: "뮤지컬 <글루미 선데이>",
//     date: "2025-11-25",
//     type: "단독판매",
//     img: "/images/reservation/expect26.gif",
//   },
//   {
//     id: 27,
//     name: "연극 <연극 라면>",
//     date: "2025-12-01",
//     type: "일반예매",
//     img: "/images/reservation/expect27.gif",
//   },
//   {
//     id: 28,
//     name: "연극 <너의 목소리가 들려>",
//     date: "2025-12-09",
//     type: "단독판매",
//     img: "/images/reservation/expect28.gif",
//   },
//   {
//     id: 29,
//     name: "연극 <올모스트메인>",
//     date: "2025-12-20",
//     type: "일반예매",
//     img: "/images/reservation/expect29.gif",
//   },
//   {
//     id: 30,
//     name: "연극 <사춘기 메들리>",
//     date: "2025-12-31",
//     type: "단독판매",
//     img: "/images/reservation/expect30.gif",
//   },
// )




//vodShowuVideo
// const vodData = await vodShowuVideo.create(
//   {
//     title : "범죄도시",
//     videoUrl : "/video/testplay.mp4",
//     description : "엄청난 괴력을 자랑하는 형사 마석도와 반장 전일만은 도시를 휘어잡은 신흥범죄조직의 보스 장첸을 비롯한 도시의 범죄조직을 일망타진할 작전을 세우기 시작한다. 형사들과 주민들의 합동작전과 더불어 마석도와 장첸의 일대일 격돌이 펼쳐진다.",
//     time : "121",
//     genre :"범죄",
//     year : "2017",
//     mainImage : "/images/movie/moive3.jpg",
//     likes : 1,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "부산행",
//     videoUrl : "/video/testplay.mp4",
//     description : "치명적인 바이러스로 인해 긴급재난대피령이 선포된 한국, 현재 유일하게 안전한 도시 부산까지 가는 열차 안에서 각자 사연을 가진 이들이 사랑하는 사람을 좀비와 바이러스로부터 지키기 위한 싸움을 시작하고, 예기치 못한 위험을 마주하게 된다.",
//     time : "118",
//     genre :"액션",
//     year : "2016",
//     mainImage : "/images/movie/moive4.jpg",
//     likes : 1,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "수리남",
//     videoUrl : "/video/testplay.mp4",
//     description : "남미 국가 수리남을 장악한 무소불위의 마약 대부로 인해 누명을 쓴 한 민간인이 국정원의 비밀 임무를 수락하며 벌어지는 이야기를 그린 영화",
//     time : "120",
//     genre :"범죄",
//     year : "2017",
//     mainImage : "/images/movie/moive5.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "스마일",
//     videoUrl : "/video/testplay.mp4",
//     description : "정신과 의사 로즈는 연이어 자살하는 환자들에게서 공통점을 발견한다. 공포에 질려가는 로즈는 이 비슷한 현상을 비껴간 생존자로부터 저주를 풀기 위한 끔찍한 방법을 듣게 된다.",
//     time : "115",
//     genre :"공포",
//     year : "2022",
//     mainImage : "/images/movie/moive6.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "엑시트",
//     videoUrl : "/video/testplay.mp4",
//     description : "산악 동아리 에이스였지만 대학 졸업 후 계속 백수인 용남은 어머니의 칠순 잔치에서 연회장 직원으로 일하는 산악 동아리 후배 의주를 마주친다. 흥겨운 잔치가 한창일 때, 건물에서 연기가 피어오르고 재난상황이 시작된다. 용남과 의주는 함께 산악 동아리에서 익힌 지식과 기술을 총동원해 모든 사람들을 대피시키며 탈출에 도전한다.",
//     time : "103",
//     genre :"코미디",
//     year : "2019",
//     mainImage : "/images/movie/moive7.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "영웅",
//     videoUrl : "/video/testplay.mp4",
//     description : "대한 제국의 의병 대장 안중근은 하얼빈역에서 조선 침략의 원흉인 이토 히로부미를 향해 주저 없이 방아쇠를 당기지만, 현장에서 체포되어 일본 법정에 서고 만다.",
//     time : "121",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/movie/moive8.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "오디션",
//     videoUrl : "/video/testplay.mp4",
//     description : "아내를 잃고 실의에 빠진 아오야마는 신붓감을 찾는 오디션을 열게 되고 신비한 여인 아사미를 만나게 된다.",
//     time : "115",
//     genre :"공포",
//     year : "1999",
//     mainImage : "/images/movie/moive9.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "웡카",
//     videoUrl : "/video/testplay.mp4",
//     description : "화려한 업적을 이루기 전의 어린 시절, 모험을 떠난 윌리 웡카가 움파룸파 가족을 만나게 된 이야기가 펼쳐진다.",
//     time : "121",
//     genre :"뮤지컬",
//     year : "2023",
//     mainImage : "/images/movie/moive10.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "10센치",
//     videoUrl : "/video/testplay.mp4",
//     description : "10센치 노래",
//     time : "3",
//     genre :"음악",
//     year : "2023",
//     mainImage : "/images/music/music.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
  
//   {
//     title : "BTS 다이너마이트",
//     videoUrl : "/video/testplay.mp4",
//     description : "<Dynamite>는 밝고 경쾌한 분위기의 디스코 팝(Disco Pop) 장르로, 팬들을 위한 희망의 메시지를 담았다. 코로나19 사태가 야기한 무력감과 허탈감을 이겨낼 '돌파구'로서 방탄소년단은 데뷔 이래 처음으로 영어로 곡을 소화하는 새로운 도전에 나섰다.",
//     time : "3",
//     genre :"음악",
//     year : "2020",
//     mainImage : "/images/music/music2.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
  
//   {
//     title : "아이브 일레븐",
//     videoUrl : "/video/testplay.mp4",
//     description : "'I HAVE = IVE'라는 의미처럼 주체적인 소녀들의 당당한 매력을 담았다. 이는 성장형 그룹의 스토리가 아닌 완성형 그룹의 자신감을 뜻한다.",
//     time : "3",
//     genre :"음악",
//     year : "2021",
//     mainImage : "/images/music/music3.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
  
//   {
//     title : "에이티즈",
//     videoUrl : "/video/testplay.mp4",
//     description : "화려한 업적을 이루기 전의 어린 시절, 모험을 떠난 윌리 웡카가 움파룸파 가족을 만나게 된 이야기가 펼쳐진다.",
//     time : "3",
//     genre :"음악",
//     year : "2024",
//     mainImage : "/images/music/music4.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
  
//   {
//     title : "ITZY Boys like you",
//     videoUrl : "/video/testplay.mp4",
//     description : "Boys Like You'는 그룹 특유의 당찬 에너지를 가득 실은 노래다. 솔직하고 거침없는 가사에는 배신감을 줬던 성숙하지 못한 상대방에게 다시는 너 같은 Boy에게는 빠지지 않겠다는 경고의 메시지를 담았다.",
//     time : "3",
//     genre :"음악",
//     year : "2022",
//     mainImage : "/images/music/music5.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "다비치",
//     videoUrl : "/video/testplay.mp4",
//     description : "화려한 업적을 이루기 전의 어린 시절, 모험을 떠난 윌리 웡카가 움파룸파 가족을 만나게 된 이야기가 펼쳐진다.",
//     time : "3",
//     genre :"음악",
//     year : "2022",
//     mainImage : "/images/music/music6.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀1",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명1",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-1.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀2",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명2",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-2.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀3",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명3",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-3.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀4",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명4",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-4.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀5",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명5",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-5.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀6",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명6",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-6.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀7",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명7",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-7.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   },
//   {
//     title : "타이틀8",
//     videoUrl : "/video/testplay.mp4",
//     description : "설명8",
//     time : "60",
//     genre :"뮤지컬",
//     year : "2022",
//     mainImage : "/images/community/musical-8.jpg",
//     likes : 0,
//     likedUsers : "677630ae686ab95419a5a1dc"
//   }
  
// )
// console.log(vodData)

// const showuvodData = await ShowuVideo.create(
//   {
//     uploaduser : "677630ae686ab95419a5a1dc",
//     title : "바이올린의 신",
//     detail : "신들린 바이올린 연주",
//     category : "음악",
//     themnail : "/images/themnail/themnail1.jpg",
//     videoUrl : "/video/video1",
//     videoelement : 0,
//     videoelement2 : 0,
//     review : "없음",
//     openclose : 0
//   },
//   {
//     uploaduser : "677630ae686ab95419a5a1dc",
//     title : "바이올린의 신2",
//     detail : "신들린 바이올린 연주2",
//     category : "음악",
//     themnail : "/images/themnail/themnail2.jpg",
//     videoUrl : "/video/video2",
//     videoelement : 0,
//     videoelement2 : 0,
//     review : "없음",
//     openclose : 0
//   },
// )


// 레슨 데이터 - lessonSchema.js
// const lessonListData = await Lesson.create(
//   {
//     id : 1,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : "/images/showu/acting/acting1.jpg",
//     lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
//     callTime : "오전12시 - 오전12시", 
//     category : "연기", 
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "서초구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 서초구", 
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 14년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },    
//             }, 
//         education : {
//             educationTitle : "중앙대학교 첨단영상대학원",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "영화 제작"
//         } //학력
//     },

// portfolios : {
//     portfolio1 : {
//             index : 1,
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : "/images/showu/acting/portfolio1.jpg" // 포트폴리오 
//             },
//     portfolio2 :{
//             index : 2, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : "/images/showu/music/portfolio2.jpg" // 포트폴리오 
//             },
//     portfolio3 :{
//             index : 3, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : "/images/showu/magic/portfolio3.jpg" // 포트폴리오 
//             },
//     portfolio4 :{
//             index : 4, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : "/images/showu/music/portfolio2.jpg" // 포트폴리오 
//             },
//         },

// medias : {
// media1 :  {
//         index : 1,
//         mediaURL : '/images/showu/acting/acting4.jpg'
//       },
// media2 :  {
//         index : 2,
//         mediaURL : "/images/showu/acting/acting5.jpg"
//       },
// media3 :  {
//         index : 3,
//         mediaURL : '/images/showu/acting/acting2.jpg'
//       },
//      },
      

//     etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
//     },
//     count : 1000, //조회수
//     likeCount : 200, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 17:44:48",
//     updateAt : "2025-01-03 17:44:48",

// },
// {
//     id : 2,
//     userId : "677630ae686ab95419a5a1dc",
//     name : "677630ae686ab95419a5a1dc",
//     lessonThumbnail : "/images/showu/music/music1.jpg",
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 음악레슨",
//                 portfolioURL : '/images/showu/music/music6.jpg'// 포트폴리오 
//                 },
//         portfolio2 :{
//                 index : 2, 
//                 portfolioTitle : "매채 음악레슨",
//                 portfolioURL : '/images/showu/music/music8.jpg' // 포트폴리오 
//                 },
//         portfolio3 :{
//                 index : 3, 
//                 portfolioTitle : "매채 음악레슨",
//                 portfolioURL : '/images/showu/music/music10.jpg' // 포트폴리오 
//                 },
//         portfolio4 :{
//                 index : 4, 
//                 portfolioTitle : "매채 음악레슨",
//                 portfolioURL : '/images/showu/music/portfolio2.jpg' // 포트폴리오 
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL : '/images/showu/music/portfolio7.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL :'/images/showu/music/music4.jpg'
//         },
//         media3 :  {
//                 index : 3,
//                 mediaURL : '/images/showu/music/portfolio5.jpg'
//                 },
//     },

//      etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
// },

//     count : 7777, 
//     likeCount : 157, 
//     likeUser : "677630ae686ab95419a5a1dc", 
//     createAt : "2025-01-03 17:44:48",
//     updateAt : "2025-01-03 17:44:48",
// },
// {
//     id : 3,
//     userId :"677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/magic/magic1.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "광진구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 광진구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/magic/magic1.jpg'
//                 },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/magic/portfolio6.jpg' // 포트폴리오 
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL :'/images/showu/music/music10.jpg' // 포트폴리오 
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL : '/images/showu/music/portfolio5.jpg'// 포트폴리오 
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL : '/images/showu/music/music2.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL :'/images/showu/music/music9.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL : '/images/showu/music/portfolio2.jpg'
//                 },
//     },

//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
//     },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 17:44:48",
//     updateAt : "2025-01-03 17:44:48",

// },
// {
//     id : 4,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/magic/portfolio1.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 

//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music4.jpg' // 포트폴리오 
//                 },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music8.jpg',
//                 index : 3, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/portfolio3.jpg' // 포트폴리오 
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music1.jpg' // 포트폴리오 
//                 },
//             },

//     medias : 
//     {media1 :  {
//             index : 1,
//             mediaURL : '/images/showu/music/portfolio3.jpg'
//             },
//     media2 :  {
//             index : 2,
//             mediaURL : '/images/showu/music/music10.jpg'
//             },
//     media3 :  {
//             index : 3,
//             mediaURL : '/images/showu/music/portfolio8.jpg'
//    },
// },
//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
//     },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 17:44:48",
//     updateAt : "2025-01-03 17:44:48",

// },
// {
//     id : 5,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/acting/portfolio4.jpg',
//     lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
//     callTime : "오전12시 - 오전12시", 
//     category : "연기", 
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "서초구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 서초구", 
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 14년", //이력
//         recode : 

//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },    
//             },
//         education : {
//             educationTitle : "중앙대학교 첨단영상대학원",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "영화 제작"
//         } //학력
//     },

// portfolios : {
//     portfolio1 : {
//             index : 1,
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/acting/acting5.jpg'
//             },
//     portfolio2 :{
//             index : 2, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/magic/magic4.jpg' // 포트폴리오 
//             },
//     portfolio3 :{
//             index : 3, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/music/music9.jpg' // 포트폴리오 
//             },
//     portfolio4 :{
//             index : 4, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/music/portfolio3.jpg' // 포트폴리오 
//             },
//         },

// medias : {
// media1 :  {
//         index : 1,
//         mediaURL : '/images/showu/magic/portfolio4.jpg'
//       },
// media2 :  {
//         index : 2,
//         mediaURL : '/images/showu/music/music5.jpg'
//          },
// media3 :  {
//         index : 3,
//         mediaURL : '/images/showu/music/music9.jpg'
//       },
//      },
      

//     etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
//     },
//     count : 1000, //조회수
//     likeCount : 200, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 17:44:48",
//     updateAt : "2025-01-03 17:44:48",

// },
// {
//     id : 6,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/magic/portfolio3.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/portfolio6.jpg' // 포트폴리오 
//                 },
//         portfolio2 :{
//                 index : 2, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/portfolio2.jpg' // 포트폴리오 
//                 },
//         portfolio3 :{
//                 index : 3, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/portfolio5.jpg' // 포트폴리오 
//                 },
//         portfolio4 :{
//                 index : 4, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/portfolio1.jpg' // 포트폴리오 
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL : '/images/showu/acting/portfolio2.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL :'/images/showu/magic/portfolio4.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL : '/images/showu/music/portfolio5.jpg'
//                 },
//     },

//      etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
// },

//     count : 7777, 
//     likeCount : 157, 
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 17:44:48",
//     updateAt : "2025-01-03 17:44:48",

// },
// {
//     id : 7,
//     userId :"677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail :'/images/showu/music/music1.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "마술", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "광진구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 광진구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/magic/magic1.jpg'// 포트폴리오 
//                 },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/magic/magic6.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL : '/images/showu/magic/magic4.jpg'
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL :'/images/showu/magic/magic2.jpg'
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL : '/images/showu/magic/portfolio6.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL :'/images/showu/magic/portfolio3.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL : '/images/showu/magic/portfolio5.jpg'
//                 },
//     },

//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
// },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 17:44:48",
//     updateAt : "2025-01-03 17:44:48",

// },
// {
//     id : 8,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail :'/images/showu/music/music1.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music2.jpg'
//         },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music3.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music4.jpg'
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music5.jpg'
//                 },
//             },

//     medias : 
//     {media1 :  {
//             index : 1,
//             mediaURL : '/images/showu/music/music6.jpg'
//             },
//     media2 :  {
//             index : 2,
//             mediaURL : '/images/showu/music/music7.jpg'
//             },
//     media3 :  {
//             index : 3,
//             mediaURL : '/images/showu/music/music8.jpg'
//             },
//    },
//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
//     },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 17:44:48",
//     updateAt : "2025-01-03 17:44:48",

// },
// {
//     id : 9,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/acting/acting1.jpg',
//     lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
//     callTime : "오전12시 - 오전12시", 
//     category : "연기", 
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "서초구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 서초구", 
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 14년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },    
//             },
//         education : {
//             educationTitle : "중앙대학교 첨단영상대학원",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "영화 제작"
//         } //학력
//     },

// portfolios : {
//     portfolio1 : {
//             index : 1,
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/acting/acting2.jpg' // 포트폴리오 
//             },
//     portfolio2 :{
//             index : 2, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/acting/acting4.jpg' // 포트폴리오 
//             },
//     portfolio3 :{
//             index : 3, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/acting/portfolio4.jpg' // 포트폴리오 
//             },
//     portfolio4 :{
//             index : 4, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL :'/images/showu/acting/acting3.jpg' // 포트폴리오 
//             },
//         },

// medias : {
// media1 :  {
//         index : 1,
//         mediaURL : '/images/showu/acting/portfolio3.jpg'
//       },
// media2 :  {
//         index : 2,
//         mediaURL : '/images/showu/acting/portfolio2.jpg'
//       },
// media3 :  {
//         index : 3,
//         mediaURL :'/images/showu/acting/portfolio1.jpg'
//       },
//      },
      

//     etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
//     },
//     count : 1000, //조회수
//     likeCount : 200, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 17:44:48",
//     updateAt : "2025-01-03 17:44:48",

// },
// {
//     id : 10,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/magic/magic1.jpg'
// ,
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "마술", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/magic2.jpg'
// // 포트폴리오 
//                 },
//         portfolio2 :{
//                 index : 2, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/magic3.jpg'

//                 },
//         portfolio3 :{
//                 index : 3, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/magic6.jpg'

//                 },
//         portfolio4 :{
//                 index : 4, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/magic5.jpg'
// // 포트폴리오 
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL : '/images/showu/magic/magic4.jpg'

//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL : '/images/showu/magic/portfolio1.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL :'/images/showu/magic/portfolio6.jpg'
//                 },
//     },

//      etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
// },

//     count : 7777, 
//     likeCount : 157, 
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 17:44:48",
//     updateAt : "2025-01-03 17:44:48",

// },
// {
//     id : 11,
//     userId :"677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/music/music1.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "광진구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 광진구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/music/music10.jpg' 
//                 },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/music/music9.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL : '/images/showu/music/music2.jpg'
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL : '/images/showu/music/music5.jpg'
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL : '/images/showu/music/music7.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL : '/images/showu/music/music3.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL :'/images/showu/music/music6.jpg'
//                 },
//     },

//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
// },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",

// },
// {
//     id : 12,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/music/music10.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music9.jpg'
//                 },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music8.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music7.jpg'
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music6.jpg' // 포트폴리오 
//                 },
//             },

//     medias : 
//     {media1 :  {
//             index : 1,
//             mediaURL : '/images/showu/music/music5.jpg'
//             },
//     media2 :  {
//             index : 2,
//             mediaURL : '/images/showu/music/music4.jpg'
//             },
//     media3 :  {
//             index : 3,
//             mediaURL : '/images/showu/music/music3.jpg'
//             },
//    },
//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
//     },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",

// },
// {
//     id : 13,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail :'/images/showu/music/music2.jpg',
//     lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
//     callTime : "오전12시 - 오전12시", 
//     category : "마술", 
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "서초구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 서초구", 
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 14년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },    
//             },
//         education : {
//             educationTitle : "중앙대학교 첨단영상대학원",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "영화 제작"
//         } //학력
//     },

// portfolios : {
//     portfolio1 : {
//             index : 1,
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/magic/portfolio1.jpg' // 포트폴리오 
//             },
//     portfolio2 :{
//             index : 2, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/magic/portfolio3.jpg' // 포트폴리오 
//             },
//     portfolio3 :{
//             index : 3, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/magic/portfolio4.jpg' // 포트폴리오 
//             },
//     portfolio4 :{
//             index : 4, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/magic/portfolio2.jpg' // 포트폴리오 
//             },
//         },

// medias : {
// media1 :  {
//         index : 1,
//         mediaURL : '/images/showu/magic/portfolio5.jpg'
//       },
// media2 :  {
//         index : 2,
//         mediaURL : '/images/showu/magic/portfolio6.jpg'
//       },
// media3 :  {
//         index : 3,
//         mediaURL : '/images/showu/magic/magic1.jpg'
//       },
//      },
      

//     etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
//     },
//     count : 1000, //조회수
//     likeCount : 200, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",

// },
// {
//     id : 14,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/acting/acting1.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL :'/images/showu/music/portfolio1.jpg'
//                 },
//         portfolio2 :{
//                 index : 2, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/portfolio3.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/portfolio5.jpg'
//                 },
//         portfolio4 :{
//                 index : 4, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/portfolio7.jpg'
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL :'/images/showu/music/portfolio9.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL : '/images/showu/music/portfolio8.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL : '/images/showu/music/portfolio7.jpg'
//                 },
//     },

//      etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
// },

//     count : 7777, 
//     likeCount : 157, 
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",

// },
// {
//     id : 15,
//     userId :"677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/magic/portfolio6.jpg',
//     lessonName : "마술을 꿈꾸는 사람들", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "마술", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "광진구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 광진구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/magic/portfolio4.jpg' // 포트폴리오 
//                 },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/magic/portfolio2.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL :'/images/showu/magic/portfolio1.jpg' // 포트폴리오 
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL : '/images/showu/magic/portfolio3.jpg'
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL : '/images/showu/magic/portfolio5.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL : '/images/showu/magic/magic6.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL : '/images/showu/magic/magic2.jpg'
//                 },
//     },

//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
// },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",

// },
// {
//     id : 16,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail :'/images/showu/music/music1.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music3.jpg'
//                 },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL :'/images/showu/music/music10.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music5.jpg'
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music7.jpg' // 포트폴리오 
//                 },
//             },

//     medias : 
//     {media1 :  {
//             index : 1,
//             mediaURL : '/images/showu/music/music9.jpg'
//             },
//     media2 :  {
//             index : 2,
//             mediaURL : '/images/showu/music/music8.jpg'
//             },
//     media3 :  {
//             index : 3,
//             mediaURL : '/images/showu/music/music2.jpg'
//             },
//    },
//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
//     },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",

// },
// {
//     id : 17,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail :'/images/showu/magic/portfolio6.jpg',
//     lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
//     callTime : "오전12시 - 오전12시", 
//     category : "마술", 
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "서초구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 서초구", 
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 14년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },    
//             },
//         education : {
//             educationTitle : "중앙대학교 첨단영상대학원",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "영화 제작"
//         } //학력
//     },

// portfolios : {
//     portfolio1 : {
//             index : 1,
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/magic/portfolio4.jpg' // 포트폴리오 
//             },
//     portfolio2 :{
//             index : 2, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/magic/magic6.jpg' // 포트폴리오 
//             },
//     portfolio3 :{
//             index : 3, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/magic/magic5.jpg' // 포트폴리오 
//             },
//     portfolio4 :{
//             index : 4, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/magic/magic4.jpg' // 포트폴리오 
//             },
//         },

// medias : {
// media1 :  {
//         index : 1,
//         mediaURL : '/images/showu/magic/magic3.jpg'
//       },
// media2 :  {
//         index : 2,
//         mediaURL : '/images/showu/magic/magic2.jpg'
//       },
// media3 :  {
//         index : 3,
//         mediaURL : '/images/showu/magic/magic1.jpg'
//       },
//      },
      

//     etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
//     },
//     count : 1000, //조회수
//     likeCount : 200, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",
// },
// {
//     id : 18,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/magic/magic6.jpg',
//     lessonName : "마술배우기", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "마술", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/magic2.jpg'
//                 },
//         portfolio2 :{
//                 index : 2, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL :'/images/showu/magic/magic1.jpg'
//         },
//         portfolio3 :{
//                 index : 3, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/magic5.jpg' // 포트폴리오 
//                 },
//         portfolio4 :{
//                 index : 4, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/magic4.jpg'
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL : '/images/showu/magic/magic3.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL : '/images/showu/magic/magic2.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL : '/images/showu/magic/portfolio6.jpg'
//                 },
//     },

//      etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
// },

//     count : 7777, 
//     likeCount : 157, 
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",

// },
// {
//     id : 19,
//     userId :"677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/acting/portfolio1.jpg',
//     lessonName : "마술 당신도 할 수 있습니다.", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "마술", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "광진구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 광진구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/acting/portfolio4.jpg'
//                 },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/acting/portfolio3.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL : '/images/showu/acting/portfolio2.jpg'
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL : '/images/showu/magic/portfolio1.jpg'
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL :'/images/showu/magic/portfolio4.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL :'/images/showu/magic/portfolio3.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL : '/images/showu/magic/portfolio2.jpg'
//                 },
//     },

//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
// },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",

// },
// {
//     id : 20,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail :'/images/showu/music/music8.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music4.jpg' 
//                 },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music2.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music1.jpg'
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/portfolio2.jpg'
//                 },
//             },

//     medias : 
//     {media1 :  {
//             index : 1,
//             mediaURL : '/images/showu/music/portfolio4.jpg'
//             },
//     media2 :  {
//             index : 2,
//             mediaURL :'/images/showu/music/portfolio8.jpg'
//             },
//     media3 :  {
//             index : 3,
//             mediaURL : '/images/showu/music/portfolio10.jpg'
//             },
//    },
//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
//     },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",

// },
// {
//     id : 21,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/acting/acting1.jpg',
//     lessonName : " 씬앤컷 SCENE & CUT : 설대봉 디렉터", 
//     callTime : "오전12시 - 오전12시", 
//     category : "연기", 
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "서초구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 서초구", 
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 14년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) 씨앤씨스쿨 연기학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) 씨앤씨스쿨 연기학원 : 매체 연기강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) 평택 대학교 연극영화과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) 기획사 제이티 코리아 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) 평택대학교 연극영화과(G.F.A) : 매체 연기 특강"
//                         },    
//             },
//         education : {
//             educationTitle : "중앙대학교 첨단영상대학원",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "영화 제작"
//         } //학력
//     },

// portfolios : {
//     portfolio1 : {
//             index : 1,
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/acting/acting2.jpg' // 포트폴리오 
//             },
//     portfolio2 :{
//             index : 2, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL :'/images/showu/acting/acting3.jpg' // 포트폴리오 
//             },
//     portfolio3 :{
//             index : 3, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL : '/images/showu/acting/acting4.jpg' // 포트폴리오 
//             },
//     portfolio4 :{
//             index : 4, //고유번호
//             portfolioTitle : "매채 연기레슨",
//             portfolioURL :'/images/showu/acting/portfolio1.jpg' // 포트폴리오 
//             },
//         },

// medias : {
// media1 :  {
//         index : 1,
//         mediaURL : '/images/showu/acting/portfolio2.jpg'
//       },
// media2 :  {
//         index : 2,
//         mediaURL : '/images/showu/acting/portfolio4.jpg'
//       },
// media3 :  {
//         index : 3,
//         mediaURL : '/images/showu/acting/acting5.jpg'
//       },
//      },
      

//     etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
//     },
//     count : 1000, //조회수
//     likeCount : 200, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-30 12:44:48",
//     updateAt : "2025-12-30 12:44:48",

// },
// {
//     id : 22,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/music/music1.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music2.jpg' // 포트폴리오 
//                 },
//         portfolio2 :{
//                 index : 2, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music3.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/music/music4.jpg'
//         },
//         portfolio4 :{
//                 index : 4, 
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL :'/images/showu/music/portfolio10.jpg' // 포트폴리오 
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL : '/images/showu/music/portfolio9.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL : '/images/showu/music/portfolio8.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL : '/images/showu/music/portfolio7.jpg'
//                 },
//     },

//      etcAnnouncement :{
//      qna1 : {
//         index : 1,
//         question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//         answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//         },
//      qna2 : {
//         index : 2,
//         question : "어떤 서비스를 전문적으로 제공하나요?",
//         answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//         }
// },

//     count : 7777, 
//     likeCount : 157, 
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-25 16:44:48",
//     updateAt : "2025-12-25 16:44:48",
// },
// {
//     id : 23,
//     userId :"677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/music/portfolio1.jpg',
//     lessonName : "쇼팽피아노", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "음악", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "광진구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 광진구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/music/portfolio10.jpg' // 포트폴리오 
//                 },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "음악 레슨",
//                 portfolioURL : '/images/showu/music/portfolio9.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL : '/images/showu/music/portfolio8.jpg' // 포트폴리오 
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "음악 강좌",
//                 portfolioURL : '/images/showu/music/portfolio7.jpg'
//                 },
//     },

//     medias : {
//         media1 :  {
//                 index : 1,
//                 mediaURL :'/images/showu/music/portfolio6.jpg'
//                 },
//         media2 :  {
//                 index : 2,
//                 mediaURL : '/images/showu/music/portfolio5.jpg'
//                 },
//         media3 :  {
//                 index : 3,
//                 mediaURL : '/images/showu/music/portfolio4.jpg'
//                 },
//     },

//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "보컬 교육 → 보컬 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 실습 촬영 → 감독 및 제작자 섭외 후 피드백 → 오디션 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
// },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-25 16:44:48",
//     updateAt : "2025-12-25 16:44:48",

// },
// {
//     id : 24,
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     lessonThumbnail : '/images/showu/magic/magic1.jpg',
//     lessonName : "재밌는 마술교실", //레슨 이름 
//     callTime : "오전12시 - 오전12시", // 응대 가능시간
//     category : "마술", // 레슨 카테고리
//     lessonAddress : {
//         addressSi : "서울시",
//         addressGuGun : "강남구",
//         addressDongLi : "",
//     },
//     lessonAddressDetail : "서울시 강남구", // 상세 주소
//     lessonDetail : "끊임없는 기획사 오디션 / 매체 연기 / 영화 제작 및 배우 포트폴리오 전문1개월 마다, 배우 포트폴리오 준비를 위한 단편영화 제작을 함께합니다.", // 레슨 상세설명
//     history : { //경력
//         personal : "총 경력 15년", //이력
//         recode : 
//                 {
//                     record1 :
//                         {
//                             recordIndex : 1,
//                             recordHistoryTitle : "前) SM 음악학원" ,
//                             periodDetails : "2017년 7월 ~ 2017년 12월",
//                             periodMonth : "6개월",
//                             recordedSummary : "前) SM 음악학원 : 매체 음악강사"
//                         },
//                     record2 :
//                         {
//                             recordIndex : 2,
//                             recordHistoryTitle : "前) yg대학교 실용음악과 특강" ,
//                             periodDetails : "2018년 1월 - 2018년 1월",
//                             periodMonth : "1개월",
//                             recordedSummary : "前) yg대학교 실용음악과 : 매체 연기 특강"
//                         },
//                     record3 :
//                         {
//                             recordIndex : 3,
//                             recordHistoryTitle : "前) jyp 엔터테인먼트" ,
//                             periodDetails : "2015년 1월 - 2015년 12월",
//                             periodMonth : "1년년",
//                             recordedSummary : "前) jyp 보컬 트레이너"
//                         },    
//             },
//         education : {
//             educationTitle : "한국예술종합학교",
//             educationPeriod : "2022년 3월 ~ 현재",
//             educationSubject : "엔지니어"
//         } //학력
//     },

//     portfolios : { 
//         portfolio1 :{
//                 index : 1,
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/magic3.jpg'
//         },
//         portfolio2 :{
//                 index : 2, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/magic5.jpg'
//                 },
//         portfolio3 :{
//                 index : 3, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/magic6.jpg'
//                 },
//         portfolio4 :{
//                 index : 4, //고유번호
//                 portfolioTitle : "매채 연기레슨",
//                 portfolioURL : '/images/showu/magic/portfolio6.jpg' // 포트폴리오 
//                 },
//             },

//     medias : 
//     {media1 :  {
//             index : 1,
//             mediaURL : '/images/showu/magic/portfolio4.jpg'
//             },
//     media2 :  {
//             index : 2,
//             mediaURL : '/images/showu/magic/portfolio3.jpg'
//             },
//     media3 :  {
//             index : 3,
//             mediaURL : '/images/showu/magic/portfolio1.jpg'
//             },
//    },
//      etcAnnouncement :{
//         qna1 : {
//             index : 1,
//             question : "서비스가 시작되기 전 어떤 절차고 진행하나요?",
//             answer : "수업 목적 파악(매체 / 입시 / 무대연기) - 목적에 따른 방향 제시 - 수업 - 제작으로 인한 결과물 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중요성을 알고 있습니다."
//             },
//         qna2 : {
//             index : 2,
//             question : "어떤 서비스를 전문적으로 제공하나요?",
//             answer : "연기 교육 → 카메라 모니터링 피드백 → 수강생 역할 오디션 → 제작 스탭 섭외 → 독립영화 촬영 → 감독 및 제작자 섭외 후 피드백 → 영화제 제출 저 또한 레슨을 받았던 시절에 워낙 까다로운 성격 탓인지 선생님을 수도 없이 바꿔왔습니다. 선생님에 대한 중요성과 고민을 너무 잘 알고 있기에, 수강생 또한 편하게 선생님에 대해 고민해 볼 필요성과 중 요성을 알고 있습니다. 그렇기에 수강생만큼 열심히 참여할 것입니다."
//             }
//     },
//     count : 7777, //조회수
//     likeCount : 157, //좋아요 수
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-12-25 16:44:48",
//     updateAt : "2025-12-25 16:44:48",
// },)


//  teamData - teamSchema.js
// const teamListData = await Team.create(
//   {
//     id : 1,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(분당)",
//     teamThumbnail :'/images/showu/acting/portfolio3.jpg',
//     category : "연기",
//     meetDay : "월",
//     meetPeriod : {
//         time :"낮",
//         timeDetail : "12시-15시"
//     }, 
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"아마추어",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-11-10", //팀 활동 시작일
//         end : "25-11-10"
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 16:44:48",
//     updateAt : "2025-03-03 16:44:48",
// },
// {
//     id : 2,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "보컬 연습",
//     teamThumbnail : '/images/showu/music/music5.jpg',
//     category : "음악",
//     meetDay : "화",
//     meetPeriod : {
//         time :"오후",
//         timeDetail : "15시-20시"
//     }, 
//     ages : "10대",
//     gender : "여자",
//     averageSkill :"비기너",
//     teamNotice : "안녕하십니까, 입시 노래 연습 파트너 구합니다.",
//     activityPeriod : {
//         start : "24-11-05", //팀 활동 시작일
//         end : "25-11-10"
//     },
//     status: "매칭 완료", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 16:44:48",
//     updateAt : "2025-03-03 16:44:48",
// },
// {
//     id : 3,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "마술 연습",
//     teamThumbnail : '/images/showu/magic/portfolio6.jpg',
//     category : "마술",
//     meetDay : "목",
//     meetPeriod : {
//         time :"저녘",
//         timeDetail : "20시 이후"
//     }, 
//     ages : "20대",
//     gender : "남자",
//     averageSkill :"프로 준비생",
//     teamNotice : "안녕하십니까, 같이 마술  연습할  파트너 구합니다.",
//     activityPeriod : {
//         start : "24-11-09", //팀 활동 시작일
//         end : "25-11-10"//팀 활동 종료일
//     },
//     status: "매칭 완료", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 16:44:48",
//     updateAt : "2025-03-03 16:44:48",
// },
// {
//     id : 4,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(서울)",
//     teamThumbnail :'/images/showu/acting/portfolio3.jpg',
//     category : "연기",
//     meetDay : "토",
//     meetPeriod : {
//         time :"낮",
//         timeDetail : "12시-15시"
//     }, 
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"프로",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-11-10", //팀 활동 시작일
//         end : "25-11-10" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 16:44:48",
//     updateAt : "2025-03-03 16:44:48",
// },
// {
//     id : 5,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(서울)",
//     teamThumbnail : '/images/showu/acting/portfolio3.jpg',
//     category : "연기",
//     meetDay : "토",
//     meetPeriod : {
//         time :"낮",
//         timeDetail : "12시-15시"
//     }, 
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"프로",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-11-10", //팀 활동 시작일
//         end : "25-11-10" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 16:44:48",
//     updateAt : "2025-03-03 16:44:48",
// },
// {
//     id : 6,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(분당)",
//     teamThumbnail : '/images/showu/music/portfolio2.jpg',
//     category : "연기",
//     meetDay : "월",
//     meetPeriod : {
//         time :"낮",
//         timeDetail : "12시-15시"
//     }, 
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"아마추어",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-11-16", //팀 활동 시작일
//         end : "25-06-10" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2025-01-03 16:44:48",
//     updateAt : "2025-03-03 16:44:48",
// },
// {
//     id : 7,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "보컬 연습",
//     teamThumbnail : '/images/showu/magic/portfolio6.jpg',
//     category : "음악",
//     meetDay : "화",
//     meetPeriod : {
//         time :"오후",
//         timeDetail : "15시-20시"
//     }, 
//     ages : "10대",
//     gender : "여자",
//     averageSkill :"비기너",
//     teamNotice : "안녕하십니까, 입시 노래 연습 파트너 구합니다.",
//     activityPeriod : {
//         start : "24-11-16", //팀 활동 시작일
//         end : "25-06-10" //팀 활동 종료일
//     },
//     status: "매칭 완료", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-30 16:44:48",
//     updateAt : "2024-12-30 16:44:48",
// },
// {
//     id : 8,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "마술 연습",
//     teamThumbnail : '/images/showu/magic/magic5.jpg',
//     category : "마술",
//     meetDay : "목",
//     meetPeriod : {
//         time :"저녘",
//         timeDetail : "20시 이후"
//     }, 
//     ages : "20대",
//     gender : "남자",
//     averageSkill :"프로 준비생",
//     teamNotice : "안녕하십니까, 같이 마술  연습할  파트너 구합니다.",
//     activityPeriod : {
//         start : "24-11-16", //팀 활동 시작일
//         end : "25-06-10" //팀 활동 종료일
//     },
//     status: "매칭 완료", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-30 16:44:48",
//     updateAt : "2024-12-30 16:44:48",
// },
// {
//     id : 9,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(서울)",
//     teamThumbnail : '/images/showu/magic/portfolio3.jpg',
//     category : "연기",
//     meetDay : "토",
//     meetPeriod : {
//         time :"낮",
//         timeDetail : "12시-15시"
//     }, 
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"프로",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-11-16", //팀 활동 시작일
//         end : "25-06-10" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-30 16:44:48",
//     updateAt : "2024-12-30 16:44:48",
// },
// {
//     id : 10,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(서울)",
//     teamThumbnail : '/images/showu/acting/acting4.jpg',
//     category : "연기",
//     meetDay : "토",
//     meetPeriod : {
//         time :"낮",
//         timeDetail : "12시-15시"
//     },
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"프로",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-11-16", //팀 활동 시작일
//         end : "25-06-10" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-30 16:44:48",
//     updateAt : "2024-12-30 16:44:48",
// },
// {
//     id : 11,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(분당)",
//     teamThumbnail :'/images/showu/music/portfolio2.jpg',
//     category : "연기",
//     meetDay : "금",
//     meetPeriod : {
//         time :"아침",
//         timeDetail : "12시 이전"
//     }, 
//     ages : "40대",
//     gender : "남녀무관",
//     averageSkill :"초보",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-06-20", //팀 활동 시작일
//         end : "24-11-15" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-30 16:44:48",
//     updateAt : "2024-12-30 16:44:48",
// },
// {
//     id : 12,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "보컬 연습",
//     teamThumbnail : '/images/showu/music/music6.jpg',
//     category : "음악",
//     meetDay : "일",
//     meetPeriod : {
//         time :"오후",
//         timeDetail : "15시-20시"
//     }, 
//     ages : "10대",
//     gender : "여자",
//     averageSkill :"세미프로",
//     teamNotice : "안녕하십니까, 입시 노래 연습 파트너 구합니다.",
//     activityPeriod : {
//         start : "24-06-20", //팀 활동 시작일
//         end : "24-11-15" //팀 활동 종료일
//     },
//     status: "매칭 완료", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-30 16:44:48",
//     updateAt : "2024-12-30 16:44:48",
// },
// {
//     id : 13,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "마술 연습",
//     teamThumbnail : '/images/showu/magic/portfolio6.jpg',
//     category : "마술",
//     meetDay : "수",
//     meetPeriod : {
//         time :"오후",
//         timeDetail : "15시-20시"
//     }, 
//     ages : "20대",
//     gender : "남자",
//     averageSkill :"프로 준비생",
//     teamNotice : "안녕하십니까, 같이 마술  연습할  파트너 구합니다.",
//     activityPeriod : {
//         start : "24-06-20", //팀 활동 시작일
//         end : "24-11-15" //팀 활동 종료일
//     },
//     status: "매칭 완료", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-30 16:44:48",
//     updateAt : "2024-12-30 16:44:48",
// },
// {
//     id : 14,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(서울)",
//     teamThumbnail :'/images/showu/music/portfolio2.jpg',
//     category : "연기",
//     meetDay : "일",
//     meetPeriod : {
//         time :"낮",
//         timeDetail : "12시-15시"
//     }, 
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"프로",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-06-20", //팀 활동 시작일
//         end : "24-11-15" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-30 16:44:48",
//     updateAt : "2024-12-30 16:44:48",
// },
// {
//     id : 15,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(서울)",
//     teamThumbnail : '/images/showu/music/portfolio4.jpg',
//     category : "연기",
//     meetDay : "토",
//     meetPeriod : {
//         time :"낮",
//         timeDetail : "12시-15시"
//     }, 
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"프로",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-06-20", //팀 활동 시작일
//         end : "24-11-15" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-30 16:44:48",
//     updateAt : "2024-12-30 16:44:48",
// },
// {
//     id : 16,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(분당)",
//     teamThumbnail : '/images/showu/music/portfolio1.jpg',
//     category : "연기",
//     meetDay : "월",
//     meetPeriod : {
//         time :"오후",
//         timeDetail : "15시-20시"
//     }, 
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"아마추어",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-06-20", //팀 활동 시작일
//         end : "24-11-15" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-25 11:44:48",
//     updateAt : "2024-12-25 11:44:48",
// },
// {
//     id : 17,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "보컬 연습",
//     teamThumbnail : '/images/showu/acting/portfolio2.jpg',
//     category : "음악",
//     meetDay : "화",
//     meetPeriod : {
//         time :"오후",
//         timeDetail : "15시-20시"
//     }, 
//     ages : "10대",
//     gender : "여자",
//     averageSkill :"비기너",
//     teamNotice : "안녕하십니까, 입시 노래 연습 파트너 구합니다.",
//     activityPeriod : {
//         start : "24-06-20", //팀 활동 시작일
//         end : "24-11-15" //팀 활동 종료일
//     },
//     status: "매칭 완료", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-25 11:44:48",
//     updateAt : "2024-12-25 11:44:48",
// },
// {
//     id : 18,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "마술 연습",
//     teamThumbnail : '/images/showu/acting/acting4.jpg',
//     category : "마술",
//     meetDay : "수",
//     meetPeriod : {
//         time :"저녘",
//         timeDetail : "20시 이후"
//     }, 
//     ages : "20대",
//     gender : "남자",
//     averageSkill :"프로 준비생",
//     teamNotice : "안녕하십니까, 같이 마술  연습할  파트너 구합니다.",
//     activityPeriod : {
//         start : "24-06-20", //팀 활동 시작일
//         end : "24-11-15" //팀 활동 종료일
//     },
//     status: "매칭 완료", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-25 11:44:48",
//     updateAt : "2024-12-25 11:44:48",
// },
// {
//     id : 19,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(서울)",
//     teamThumbnail : '/images/showu/music/portfolio1.jpg',
//     category : "연기",
//     meetDay : "토",
//     meetPeriod : {
//         time :"오후",
//         timeDetail : "15시-20시"
//     }, 
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"프로",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-07-20", //팀 활동 시작일
//         end : "24-12-15" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-25 11:44:48",
//     updateAt : "2024-12-25 11:44:48",
// },
// {
//     id : 20,
//     userId : "677630ae686ab95419a5a1dc",
//     teamName : "아마추어 연기 연습(서울)",
//     teamThumbnail : '/images/showu/magic/portfolio6.jpg',
//     category : "연기",
//     meetDay : "수",
//     meetPeriod : {
//         time :"낮",
//         timeDetail : "12시-15시"
//     }, 
//     ages : "20대",
//     gender : "남녀무관",
//     averageSkill :"프로",
//     teamNotice : "안녕하십니까, 분당에서 취미로 연기 연습 할 상대역 구하고 있습니다. 현재 5먕 정도 모여서 서로 연기 봐주면서 진행하고 있습니다 .",
//     activityPeriod : {
//         start : "24-07-20", //팀 활동 시작일
//         end : "24-12-15" //팀 활동 종료일
//     },
//     status: "매칭 대기", //팀 매칭 승인 상태
//     count : 300, 
//     likeCount : 30,
//     likeUser : "677630ae686ab95419a5a1dc",
//     createAt : "2024-12-25 11:44:48",
//     updateAt : "2024-12-25 11:44:48",
// },
// )


// lessonReservationData - lessonReservationSchema.js
// const lessonReservationData = await LessonResevation.create(
//   {
//     id : 1,
//     classId : '677950aa4793c615ee8eb4ac',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-15",
//     createAt : "2025-01-04 11:44:48",

//    },
//   {
//     id : 2,
//     classId : '677950aa4793c615ee8eb4ac',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-21",
//     createAt : "2025-01-04 11:44:48",
//    },
//   {
//     id : 3,
//     classId : '677950aa4793c615ee8eb4ac',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-21",
//     createAt : "2025-01-04 11:44:48",
//    },
//   {
//     id : 4,
//     classId : '677950aa4793c615ee8eb4ad',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-22",
//     createAt : "2025-01-04 11:44:48",
//    },
//   {
//     id : 5,
//     classId : '677950aa4793c615ee8eb4ad',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-22",
//     createAt : "2025-01-04 11:44:48",
//    },
//   {
//     id : 6,
//     classId : '677950aa4793c615ee8eb4b0',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-22",
//     createAt : "2025-01-04 11:44:48",
//    },
//   {
//     id : 7,
//     classId : '677950aa4793c615ee8eb4af',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-24",
//     createAt : "2025-01-04 11:44:48",
//    },
//   {
//     id : 8,
//     classId : '677950aa4793c615ee8eb4ac',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-24",
//     createAt : "2025-01-04 11:44:48",
//    },
//   {
//     id : 9,
//     classId : '677950aa4793c615ee8eb4ae',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-25",
//     createAt : "2025-01-04 11:44:48",
//    },
//   {
//     id : 10,
//     classId : '677950aa4793c615ee8eb4b0',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-25",
//     createAt : "2024-12-30 11:44:48",
//    },
//     {
//     id : 11,
//     classId : '677950aa4793c615ee8eb4ac',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-30",
//     createAt : "2024-12-30 11:44:48",
//    },
//     {
//     id : 12,
//     classId : '677950aa4793c615ee8eb4ad',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-30",
//     createAt : "2024-12-30 11:44:48",
//    },
// {
//     id : 13,
//     classId : '677950aa4793c615ee8eb4af',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-24",
//     createAt : "2024-12-30 11:44:48",
//    },
//   {
//     id : 14,
//     classId : '677950aa4793c615ee8eb4b0',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-24",
//     createAt : "2024-12-30 11:44:48",
//    },
//   {
//     id : 15,
//     classId : '677950aa4793c615ee8eb4ad',
//     userId : "677630ae686ab95419a5a1dc",
//     name :  "677630ae686ab95419a5a1dc",
//     phoneNumber : "010-9999-9999",
//     email : "test123@gmail.com",
//     memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//     date : "2025-01-25",
//     createAt : "2024-12-30 11:44:48",
//    },
//    {
//       id : 16,
//       classId :'677950aa4793c615ee8eb4b0',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-15",
//       createAt : "2024-12-30 11:44:48",
//      },
//     {
//       id : 17,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-21",
//       createAt : "2024-12-30 11:44:48",
//      },
//     {
//       id : 18,
//       classId : '677950aa4793c615ee8eb4ac',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-21",
//       createAt : "2024-12-30 11:44:48",
//      },
//     {
//       id : 19,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-22",
//       createAt : "2024-12-30 11:44:48",
//      },
//     {
//       id : 20,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-22",
//       createAt : "2024-12-30 11:44:48",
//      },
//     {
//       id : 21,
//       classId : '677950aa4793c615ee8eb4b1', 
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-22",
//       createAt : "2024-12-30 11:44:48",
//      },
//     {
//       id : 22,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-30 11:44:48",
//      },
//     {
//       id : 23,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-30 11:44:48",
//      },
//     {
//       id : 24,
//       classId : '677950aa4793c615ee8eb4b1', 
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-25",
//       createAt : "2024-12-30 11:44:48",
//      },
//     {
//       id : 25,
//       classId : '677950aa4793c615ee8eb4af',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-25",
//       createAt : "2024-12-30 11:44:48",
//      },
//       {
//       id : 26,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-30",
//       createAt : "2024-12-30 11:44:48",
//      },
//       {
//       id : 27,
//       classId : '677950aa4793c615ee8eb4b1',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-30",
//       createAt : "2024-12-25 11:44:48",
//      },
//   {
//       id :28,
//       classId : '677950aa4793c615ee8eb4ae',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id :29,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 30,
//       classId : '677950aa4793c615ee8eb4b1',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-25",
//       createAt : "2024-12-25 11:44:48",
//      },
//      {
//       id : 31,
//       classId : '677950aa4793c615ee8eb4ac',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-15",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 32,
//       classId : '677950aa4793c615ee8eb4af',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-21",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 33,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-21",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 34,
//       classId : '677950aa4793c615ee8eb4ac',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-22",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 35,
//       classId : '677950aa4793c615ee8eb4ae',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-22",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 36,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-22",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 37,
//       classId : '677950aa4793c615ee8eb4af',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 38,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 39,
//       classId : '677950aa4793c615ee8eb4ac',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-25",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 40,
//       classId : '677950aa4793c615ee8eb4ac',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-25",
//       createAt : "2024-12-25 11:44:48",
//      },
//       {
//       id : 41,
//       classId : '677950aa4793c615ee8eb4b1',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-30",
//       createAt : "2024-12-25 11:44:48",
//      },
//       {
//       id : 42,
//       classId : '677950aa4793c615ee8eb4ac',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-30",
//       createAt : "2024-12-25 11:44:48",
//      },
//   {
//       id : 43,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 44,
//       classId : '677950aa4793c615ee8eb4b1',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 45,
//       classId : '677950aa4793c615ee8eb4b1',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-25",
//       createAt : "2024-12-25 11:44:48",
//      },
//      {
//       id : 46,
//       classId : '677950aa4793c615ee8eb4af',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-15",
//       createAt : "2024-12-25 11:44:48",
//      },
//     {
//       id : 47,
//       classId : '677950aa4793c615ee8eb4ac',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-21",
//       createAt : "2024-12-22 11:44:48",
//      },
//     {
//       id : 48,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-21",
//       createAt : "2024-12-22 11:44:48",
//      },
//     {
//       id : 49,
//       classId : '677950aa4793c615ee8eb4ad',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-22",
//       createAt : "2024-12-22 11:44:48",
//      },
//     {
//       id : 50,
//       classId :'677950aa4793c615ee8eb4af',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-22",
//       createAt : "2024-12-22 11:44:48",
//      },
//     {
//       id : 51,
//       classId : '677950aa4793c615ee8eb4ae',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-22",
//       createAt : "2024-12-22 11:44:48",
//      },
//     {
//       id : 52,
//       classId : '677950aa4793c615ee8eb4ac',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-22 11:44:48",
//      },
//     {
//       id : 53,
//       classId : '677950aa4793c615ee8eb4af',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-22 11:44:48",
//      },
//     {
//       id : 54,
//       classId : '677950aa4793c615ee8eb4ac',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-25",
//       createAt : "2024-12-22 11:44:48",
//      },
//     {
//       id : 55,
//       classId : '677950aa4793c615ee8eb4ae',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-25",
//       createAt : "2024-12-22 11:44:48",
//      },
//       {
//       id : 56,
//       classId : '677950aa4793c615ee8eb4af',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-30",
//       createAt : "2024-12-22 11:44:48",
//      },
//       {
//       id : 57,
//       classId : '677950aa4793c615ee8eb4ae',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-30",
//       createAt : "2024-12-22 11:44:48",
//      },
//   {
//       id : 58,
//       classId : '677950aa4793c615ee8eb4af',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-22 11:44:48",
//      },
//     {
//       id : 59,
//       classId : '677950aa4793c615ee8eb4af',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-24",
//       createAt : "2024-12-22 11:44:48",
//      },
//     {
//       id : 60,
//       classId : '677950aa4793c615ee8eb4ae',
//       userId : "677630ae686ab95419a5a1dc",
//       name :  "677630ae686ab95419a5a1dc",
//       phoneNumber : "010-9999-9999",
//       email : "test123@gmail.com",
//       memo : "안녕하세요 레슨관련 문의 남깁니다." ,
//       date : "2025-01-25",
//       createAt : "2024-12-22 11:44:48",
//      },
     
//     )







// console.log(communityData)
// console.log(mdData)
console.log(auctionData)
// console.log(showuvodData)
// console.log(spaceData)
// console.log(showData)
// console.log(lessonListData)
// console.log(teamListData)
// console.log(lessonReservationData)
// console.log(likeData)
// console.log(reservationData)
// console.log(newsData)
// console.log(newsInfoData)
// console.log(auditionData)
// console.log(mdCartData)
// console.log(ticketEventData)
// console.log(auditionInfoData)
// console.log(auctionPaymentData)
// console.log(mdPaymentData)