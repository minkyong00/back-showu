// import TicketEvent from "../../models/reservation/ticketEventSchema";

// const ticketEventData = [
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
// ];

// import Like from "../../models/reservation/likeSchema.js";

// const likeData = [
//   {
//     user: "677630ae686ab95419a5a1dc", // 홍길동 회원의 ID
//     spaceId: mongoose.Types.ObjectId("6777b14b45bae57603a94a02"), // 삽입된 Space ObjectId-1
//     showId: null,
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: mongoose.Types.ObjectId("6777b14b45bae57603a94a03"), // 삽입된 Space ObjectId-2
//     showId: null,
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: null,
//     showId: mongoose.Types.ObjectId("66777b14b45bae57603a94a08"), // 삽입된 Show ObjectId-1
//     createdAt: new Date().toISOString(),
//   },
//   {
//     user: "677630ae686ab95419a5a1dc",
//     spaceId: null,
//     showId: mongoose.Types.ObjectId("6777b14b45bae57603a94a0f"), // 삽입된 Show ObjectId-2
//     createdAt: new Date().toISOString(),
//   },
// ];

// import Reservation from "../../models/reservation/reservationSchema.js";
// import { format, addDays } from "date-fns";

// const now = new Date();
// const reservationData = [
//   {
//     id: 1,
//     spaceId: mongoose.Types.ObjectId("6777b14b45bae57603a94a02"), // 삽입된 Space ObjectId-1
//     showId: null,
//     user: mongoose.Types.ObjectId("677630ae686ab95419a5a1dc"), // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 1), "yyyy-MM-dd"), // 1일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(10, 0)), "HH:mm:ss"), // 10:00 AM
//     totalAmount: 300000, // 예시 총 금액
//     discountsApplied: ["Early Bird Discount"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
//   {
//     id: 2,
//     spaceId: mongoose.Types.ObjectId("6777b14b45bae57603a94a03"), // 삽입된 Space ObjectId-2
//     showId: null,
//     user: mongoose.Types.ObjectId("677630ae686ab95419a5a1dc"), // 홍길동 회원의 ID
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
//     showId: mongoose.Types.ObjectId("66777b14b45bae57603a94a08"), // 삽입된 Show ObjectId-1
//     user: mongoose.Types.ObjectId("677630ae686ab95419a5a1dc"), // 홍길동 회원의 ID
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
//     showId: mongoose.Types.ObjectId("6777b14b45bae57603a94a0f"), // 삽입된 Show ObjectId-2
//     user: mongoose.Types.ObjectId("677630ae686ab95419a5a1dc"), // 홍길동 회원의 ID
//     reservationDate: format(addDays(now, 4), "yyyy-MM-dd"), // 4일 후 예약 날짜
//     reservationTime: format(new Date(now.setHours(17, 0)), "HH:mm:ss"), // 5:00 PM
//     totalAmount: 95000, // 예시 총 금액
//     discountsApplied: ["Student Discount"], // 예시 적용된 할인 정보
//     createdAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//     updatedAt: format(now, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
//   },
// ];
